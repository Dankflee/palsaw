import Link from "next/link";
import Image from "next/image";

// logo component for the chat functionality 

export const ChatLogo = () => {
    return(
        <Link href="/organization">
            <div className="hover:opacity-75 transition ring-offset-violet-600  items-center gap-x-2 md:flex">
                <Image
                src = "/ChatLogo.svg"
                alt = "Chat"
                height = {30}
                width = {30}
                />
            </div>
        </Link>
    );
};