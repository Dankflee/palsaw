import {Logo} from "@/components/logo";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    return(
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-md bg-white flex items-center">
            <div className="md:max-w-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="outline" asChild>
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href="/sign-up">
                            Get PALSAW For Free
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}; 