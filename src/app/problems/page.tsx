import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";

type Props = {};

const Problems = async (props: Props) => {
  const problem = await prisma.problem.findMany();
  return (
    <div className="flex justify-center mt-20 mr-10 ml-10 mb-20 border-2 rounded-2xl py-5 px-10">
      <Table>
        <TableCaption>A list of available problems.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Problem ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead className="text-center">URL</TableHead>
            <TableHead className="text-right">Difficulty</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problem.map((problem) => (
            <TableRow>
              <TableCell key={problem.id} className="font-medium">
                {problem.id}
              </TableCell>
              <TableCell key={problem.Title}>
                <a href={`/problem/${problem.id}`} target="_blank">
                  {problem.Title}
                </a>
              </TableCell>
              <TableCell key={problem.Rate}>{problem.Rate}</TableCell>
              <TableCell
                key={problem.URL}
                className="flex justify-center items-center"
              >
                <a href={problem.URL as string} target="_blank">
                  <Link2 className="w-6 h-6" />
                </a>
              </TableCell>
              <TableCell
                key={problem.level}
                className={cn("text-right font-semibold", {
                  "text-green-500": problem.level == "Easy",
                  "text-amber-400": problem.level == "Medium",
                  "text-red-500": problem.level == "Hard",
                })}
              >
                {problem.level}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Problems;
