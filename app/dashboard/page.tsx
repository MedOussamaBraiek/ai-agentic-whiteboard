import ProjectList from "@/components/custom/dashboard/ProjectList";
import WelcomeBanner from "@/components/custom/dashboard/WelcomeBanner";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      {/* welcome banner */}
      <WelcomeBanner />
      {/* project list / empty state */}
      <ProjectList />
    </div>
  );
};

export default DashboardPage;
