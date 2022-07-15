import React from 'react';
import { Link } from 'react-router-dom';
import { Text }from '@chakra-ui/react'
import { PageLayout } from '../layout/PageLayout';

export const Home = () => {
  return (
    <PageLayout>
      <Link to="/dashboard">
          <Text whiteSpace="pre-line">
              {`924 Terrell Inlet Apt. 491\nWest Carey, KY 26535`}
          </Text>
      </Link>
    </PageLayout>
  )
}