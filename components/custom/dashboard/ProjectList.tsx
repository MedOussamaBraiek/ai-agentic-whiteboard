"use client";

import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";
import { useState } from "react";
import CreateNewBoardDialog from "./CreateNewBoardDialog";

function ProjectList() {
  const [projectList, setPorjectList] = useState([]);
  return (
    <div>
      {projectList.length === 0 ? (
        // Empty state
        <div className="flex flex-col items-center p-10 border rounded-xl mt-10 gap-3">
          <Folder className="h-12 w-12" />
          <h2 className="text-xl font-bold">No Bords Found</h2>
          <p className="text-muted-foreground">
            Create your first board to start brainstorming, Planning!
          </p>
          <CreateNewBoardDialog />
        </div>
      ) : (
        <div>Produt list</div>
      )}
    </div>
  );
}

export default ProjectList;
