"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Sparkle } from "lucide-react";
import React from "react";
import CreateNewBoardDialog from "./CreateNewBoardDialog";

function WelcomeBanner() {
  const { user } = useUser();
  return (
    <div>
      <div className="p-10 border rounded-xl bg-gradient-to-r from-blue-200 to-purple-200">
        <h2 className="text-3xl font-bold">Welcome Back, {user?.fullName}</h2>
        <p className="mt-2">
          Turn Your Ideas into diagrams, notes and visuals on an infinit canvas.
        </p>

        <div className="mt-5 flex items-center gap-2">
          <div className="max-w-3xl">
            <CreateNewBoardDialog />
          </div>
          <Button variant="outline" size="lg">
            <Sparkle /> AI Helper
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
