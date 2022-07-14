import React from 'react';
import { Link } from 'react-router-dom';
import { PageAnimation } from '../util/animate-page';

export const Dashboard = () => {
  return (
    <PageAnimation>
        <Link to="/">Dashboard</Link>
    </PageAnimation>
  )
}