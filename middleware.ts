import { RedirectToSignIn } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";


const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)']);

export default clerkMiddleware((auth,req) => {
  const { userId, orgId } = auth(); 

  if (req.nextUrl.pathname === "/sign-in") {
   return NextResponse.next();
  }
  
  if (!userId) {
    if (isProtectedRoute(req)) {
      let path = "/select-org"; 

      if (orgId) {
        path = `/organization/${orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection); 
    } else {
      return NextResponse.redirect(new URL('/sign-in', req.url)); 
    }
  }

  if (userId && !orgId && req.nextUrl.pathname !== "/select-org") {
    const orgSelection = new URL("/select-org", req.url);
    return NextResponse.redirect(orgSelection); 
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