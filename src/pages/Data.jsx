import React, { useState, useEffect } from 'react';
import {
  Text,
  Container,
  Flex,
  Center,
}from '@chakra-ui/react'
import { PageLayout } from '../layout/PageLayout';
import { getDataAPI, getToken, newToken } from '../util/api';
import { SearchBar } from '../component/Search/SearchBar';
import { DataCard } from '../component/Card/DataCard';
import Pagination from '../component/Pagination/Pagination';
import usePagination from '../component/Pagination/PaginationUtil';

export const Data = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState();
  const [data, setData] = useState([]);
  const pagination = usePagination({
    totalItem: data.length,
    page,
    items: data,
    itemsPerPage: 5,
  })

  const searchData = () => {
    // if (search !== '') {
    //   let searchedItem = scoreboard.filter(
    //     (item) =>
    //       item.nim.toString().includes(search) ||
    //       item.name.toLowerCase().includes(search.toLowerCase()) ||
    //       item.kelompok.toLowerCase().includes(search.toLowerCase())
    //   );
    //   setData(searchedItem);
    // } else {
    //   setData(defaultData);
    // }
    // setPage(1);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);

    // Clicked 'X' on searchbar
    if (e.nativeEvent.data === undefined) {
      setData([]);
      setPage(1);
    }

    searchData();
  }
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDataAPI("/customers");
      setData(data);
    }
    fetchData();
  }, [])

  return (
    <PageLayout>
      <Container
        maxW="70ch"
        mb={8}
      >
        <SearchBar />
      </Container>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text
          fontWeight="bold"
          mb={5}
        >
          Data Customer
        </Text>
        {pagination.pageItems.length > 0 ? (
          pagination.pageItems.map((item, idx) => {
            return (
              <DataCard 
                key={idx}
                {...item}
              />
            )
        })
        ) : (
          <Center>
            Empty Data
          </Center>
        )}
        <Center>
          <Pagination
            {...pagination}
            onPageChange={(page) => setPage(page)}
          />
        </Center>
      </Flex>
    </PageLayout>
  )
}