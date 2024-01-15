import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
import { Github } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  return (
    <nav className="fixed inset-x-0 top-0 bg-background dark:bg-background z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl">
        <Link href="/" className="items-center hidden gap-2 sm:flex">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            AlgoX
          </p>
        </Link>
        <div className="flex items-center">
          <HoverCard>
            <HoverCardTrigger>
              <Link href="https://github.com/bhav-07/AlgoX">
                <Github className="w-6 h-6 mr-6" />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm">
              Checkout the GitHub Repository for this project!
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Link href="/upcoming" className="mr-6">
                Upcoming
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm">
              Checkout upcoming contests on various platforms!
            </HoverCardContent>
          </HoverCard>
          {session?.user && (
            <>
              <Link href="/problems" className="mr-6">
                Problems
              </Link>
              <Link href="/blogs" className="mr-6">
                Blogs
              </Link>
              <Link href="/settings" className="mr-6">
                Settings
              </Link>
            </>
          )}

          <ThemeToggle className="mr-6" />
          <div className="flex items-center">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
