
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";


const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)']);

export default clerkMiddleware((auth,req) => {
  const { userId, orgId } = auth(); 

  if (req.nextUrl.pathname === "/sign-in" || req.nextUrl.pathname === "/select-org") {
   return NextResponse.next();
  }

  if (!userId) {
    if (isProtectedRoute(req)) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    } else {
      return NextResponse.next();
    }
  }

  if (userId && !orgId) {
    return NextResponse.redirect(new URL("/select-org", req.url));
  }

  if (userId && orgId && req.nextUrl.pathname !== `/organization/${orgId}`) {
    return NextResponse.redirect(new URL(`/organization/${orgId}`, req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};