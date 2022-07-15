import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { OverviewCard } from '../component/OverviewCard';
import { LokasiCard } from '../component/LokasiCard';
import { Flex } from '@chakra-ui/react';

export const Dashboard = () => {
  return (
    <PageLayout>
      <Flex flexDirection="row" gap={8}>
        <OverviewCard />
        <Flex flexDirection="column" w="100%">
          <LokasiCard />
        </Flex>
      </Flex>
    </PageLayout>
  )
}