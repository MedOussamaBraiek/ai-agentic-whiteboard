import { db, projects } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { projectName, projectId } = await req.json();
  const user = await currentUser();

  if (!projectId || !projectName) {
    return NextResponse.json({
      error: "Project Information missing",
    });
  }

  const result = await db
    .insert(projects)
    .values({
      projectId: projectId,
      projectName: projectName,
      userEmail: user?.primaryEmailAddress?.emailAddress ?? "",
    })
    .returning();

  return NextResponse.json(result[0]);
}
