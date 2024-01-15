import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-dropdown-menu";
import * as React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <div className=" mt-12 px-10 py-20 items-center gap-2 sm:flex">
        <p className="px-10 text-9xl font-extrabold transition-all hover:-translate-y-[4px] md:block dark:border-white">
          AlgoX.
        </p>
        <h3 className="flex text-xl align-middle">
          Tempor elitr sanctus et clita amet rebum, sed diam rebum eos kasd, est
          clita diam tempor duo clita sed sadipscing. Erat sea invidunt sea no
          accusam dolore. Invidunt sit aliquyam amet erat vero, ea dolore sed
          sea ipsum magna, labore erat consetetur ea accusam. Elitr consetetur
          tempor tempor aliquyam ipsum stet stet. Clita gubergren sed vero ipsum
          amet magna. Et.
        </h3>
      </div>
      <div className="p-14">
        <ScrollArea className="rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-lg leading-none">Latest</h4>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default HomePage;
