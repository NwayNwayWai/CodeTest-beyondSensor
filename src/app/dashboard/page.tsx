import React from "react";
import { NextPage } from "next";

import PageLayout from "@/components/layout";
import Dashboard from "@/components/pageContainers/dashboard";
import ProtectLayout from "@/components/layout/ProtectLayout";

const DashboardPage: NextPage = () => {
  return (
    <ProtectLayout>
      <PageLayout title="Dashboard">
        <Dashboard />
      </PageLayout>
    </ProtectLayout>
  );
};

export default DashboardPage;
