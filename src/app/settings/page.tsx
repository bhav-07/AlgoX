import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserRating } from "@/lib/utils";

export default async function Settings() {
  const [CodeforcesUsername, setCodeforcesUsername] = React.useState("jesko");

  return (
    <div className="mt-32 flex justify-center align-middle">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>
            Enter your details below to update your profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Enter your CodeForces Username</Label>
                <Input
                  onChange={(e) => setCodeforcesUsername(e.target.value)}
                  id="name"
                  placeholder="Codeforces Username"
                />
              </div>
              <div className="flex flex-col space-y-1.5"></div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={() => getUserRating(CodeforcesUsername)}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
