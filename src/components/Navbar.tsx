import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
import { Github } from "lucide-react";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  return (
    <nav className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl">
        <Link href="/homepage" className="items-center hidden gap-2 sm:flex">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            AlgoX
          </p>
        </Link>
        <div className="flex items-center">
          <Link href="https://github.com/bhav-07/AlgoX">
            <Github className="w-6 h-6 mr-4" />
          </Link>
          <Link href="/hoempage" className="mr-4">
            Home Page
          </Link>
          {session?.user && (
            <>
              <Link href="/problems" className="mr-4">
                Problems
              </Link>
              <Link href="/blogs" className="mr-4">
                Blogs
              </Link>
              <Link href="/settings" className="mr-4">
                Settings
              </Link>
            </>
          )}

          <ThemeToggle className="mr-3" />
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
