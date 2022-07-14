import React from 'react';
import { Link } from 'react-router-dom';
import { Text }from '@chakra-ui/react'
import { PageAnimation } from '../util/animate-page';

export const Home = () => {
    return (
      <PageAnimation>
        <Link to="/dashboard">
            <Text whiteSpace="pre-line">
                {`924 Terrell Inlet Apt. 491\nWest Carey, KY 26535`}
            </Text>
        </Link>
      </PageAnimation>
  )
}