import {Logo} from "@/components/logo";
// import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton} from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { ChatLogo } from "@/components/Chatlogo";

export const Navbar = () => {
    return(
        <nav className="fixed z-50 top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
            { }
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
                    Create
                </Button>
                <Button size="sm" className="rounded-sm block md:hidden">
                    <Plus className="h-4 w-4"/>
                </Button>
            </div>

            <div className="ml-auto flex items-center gap-x-2">
            <div>                
                <Button size="sm" className="rounded-sm flex items-center justify-between bg-white transition-colors h-auto py-1.5 px-2 ">
                    <ChatLogo />
                </Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher 
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectOrganizationUrl="/organization/:id"
                    appearance={{
                        elements:{
                            rootBox:{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                            },
                        },
                    }}
                />
                <UserButton 
                appearance={{
                    elements: {
                        avatarBox: {
                            height: 30,
                            width: 30,
                        },
                    },
                }}
                />
            </div>
            </div>
        </nav>
    );
};
//added a button for chat integration using socket.io for websockets
