import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-dropdown-menu";
import * as React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-2 sm:flex">
        <p className=" rounded-xl border-2 border-b-4 border-r-4 border-black px-5 py-5 mt-24 text-9xl font-extrabold transition-all hover:-translate-y-[2px] md:block dark:border-white">
          AlgoX
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 sm:flex mt-10">
        <ScrollArea className="flex justify-center items-center h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Latest</h4>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default HomePage;
