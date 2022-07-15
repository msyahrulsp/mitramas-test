import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { OverviewCard } from '../component/Card/OverviewCard';
import { LokasiCard } from '../component/Card/LokasiCard';
import { BankCard } from '../component/Card/BankCard';
import { AktivitasCard } from '../component/Card/AktivitasCard';
import { RelasiCard } from '../component/Card/RelasiCard';
import { Flex } from '@chakra-ui/react';

export const Dashboard = () => {
  return (
    <PageLayout>
      <Flex flexDirection={{ base: "column", lg: "row" }} gap={8} h="100%">
        <OverviewCard />
        <Flex flexDirection="column" w="100%" gap={8}>
          <LokasiCard />
          <Flex flexDirection={{ base: "column-reverse", lg: "row" }} gap={8}>
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