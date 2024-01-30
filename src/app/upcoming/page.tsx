import * as React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import {users} from "./data";
export default function TableDemo() {
  return (
    <div className=" mx-auto h-screen grid place-items-strech px-0">
      <Table className="border-collapse border border-gray-200">
        <TableCaption>Upcoming Contests.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="pt-20">Platform</TableHead>
            <TableHead className="relative pt-20 text-center">Contest Name</TableHead>
            <TableHead className="pt-20 text-center">Contest Id</TableHead>
            <TableHead className="pt-20 text-center">Date</TableHead>
            <TableHead className="pt-20 text-center">Start Time</TableHead>
            <TableHead className="pt-20 text-center">Duration Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.Platform}</TableCell>
              <TableCell className="text-center"><Link legacyBehavior href={user.Urhl}><a target="_blank">{user.ContestName}</a></Link></TableCell>
              <TableCell className="text-center">{user.ContestId}</TableCell>
              <TableCell className="text-center">{user.Date}</TableCell>
              <TableCell className="text-center">{user.Start_time}</TableCell>
              <TableCell className="text-center">{user.Duration_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}





