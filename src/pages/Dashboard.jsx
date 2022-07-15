import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { OverviewCard } from '../component/OverviewCard';
import { LokasiCard } from '../component/LokasiCard';
import { BankCard } from '../component/BankCard';
import { AktivitasCard } from '../component/AktivitasCard';
import { RelasiCard } from '../component/RelasiCard';
import { Flex } from '@chakra-ui/react';

export const Dashboard = () => {
  return (
    <PageLayout>
      <Flex flexDirection="row" gap={8} h="100%">
        <OverviewCard />
        <Flex flexDirection="column" w="100%" gap={8}>
          <LokasiCard />
          <Flex flexDirection="row" gap={8}>
            <Flex flexDirection="column" w="100%" gap={8}>
              <BankCard />
              <RelasiCard />
            </Flex>
            <AktivitasCard />
          </Flex>
        </Flex>
      </Flex>
    </PageLayout>
  )
}