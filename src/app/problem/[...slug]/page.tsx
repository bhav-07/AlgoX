import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable";
  import { prisma } from "@/lib/db";
  import { cn } from "@/lib/utils";
  import React from "react";
  
  type Props = {
    params: {
      slug: string[];
    };
  };
  
  const Problem = async ({ params: { slug } }: Props) => {
    const [problemNumber] = slug;
    const problem = await prisma.problem.findUnique({
      where: {
        id: Number(problemNumber),
      },
    });
    return (
      <div className="flex items-center justify-center">
        <ResizablePanelGroup
          direction="horizontal"
          className="rounded-lg border mt-20"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-start text-2xl p-4">
              <span className="font-semibold">{`${problem?.id} . ${problem?.Title}`}</span>
              <div
                className={cn({
                  "text-green-500": problem?.level == "Easy",
                  "text-amber-400": problem?.level == "Medium",
                  "text-red-500": problem?.level == "Hard",
                })}
              >
                {problem?.level}
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  };
  
  export default Problem;