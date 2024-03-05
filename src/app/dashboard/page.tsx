import React from 'react';
import { NextPage } from 'next';

import PageLayout from '@/components/layout';
import Dashboard from '@/components/pageContainers/dashboard';

const DashboardPage: NextPage = () => {
  return (
    <PageLayout title="Dashboard">
      <Dashboard />
    </PageLayout>
  );
};

export default DashboardPage;
