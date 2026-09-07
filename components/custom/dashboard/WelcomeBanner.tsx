"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Sparkle } from "lucide-react";
import React from "react";

function WelcomeBanner() {
  const { user } = useUser();
  return (
    <div>
      <div className="p-10 border rounded-xl bg-gradient-to-r from-blue-200 to-purple-200">
        <h2 className="text-3xl font-bold">Welcome Back, {user?.fullName}</h2>
        <p className="mt-2">Bring Your Ideas to Life on infinite Canvas</p>

        <div className="mt-5 flex items-center gap-2 mt-5">
          <Button size="lg">+ Create New Board</Button>
          <Button variant="outline" size="lg">
            <Sparkle /> AI Helper
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
