import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../layout/PageLayout';

export const Dashboard = () => {
  return (
    <PageLayout>
      <Link to="/">Dashboard</Link>
    </PageLayout>
  )
}