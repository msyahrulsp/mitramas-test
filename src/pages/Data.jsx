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
  const [filter, setFilter] = useState([true, true]);
  const [defaultData, setDefaultData] = useState([]);
  const [data, setData] = useState([]);
  const pagination = usePagination({
    totalItem: data.length,
    page,
    items: data,
    itemsPerPage: 5,
  })

  const searchData = (trueVal, falseVal, val) => {
    let searchedItem = defaultData;

    if (val !== '') {
      searchedItem = searchedItem.filter(
        (item) =>
          item.name.toLowerCase().includes(val.toLowerCase())
      );
    }

    let tempTrue = []
    if (trueVal) {
      tempTrue = searchedItem.filter((item) => item.status === true);
    }

    let tempFalse = []
    if (falseVal) {
      tempFalse = searchedItem.filter((item) => item.status === false);
    }

    setData(tempTrue.concat(tempFalse).sort((a, b) => a.firstName.localeCompare(b.firstName)));
    setPage(1);
  }

  const handleTrue = (e) => {
    setFilter([e.target.checked, filter[1]]);
    searchData(e.target.checked, filter[1], search);
  }

  const handleFalse = (e) => {
    setFilter([filter[0], e.target.checked]);
    searchData(filter[0], e.target.checked, search);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchData(filter[0], filter[1], e.target.value);
  }
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDataAPI("/customers")
      const temp = data.map((item) => {
        return {
          ...item,
          firstName: item.name.split(' ')[0],
        }
      }).sort((a, b) => a.name.localeCompare(b.name))
      setDefaultData(temp);
      setData(temp);
    }
    fetchData();
  }, [])

  return (
    <PageLayout>
      <Container
        maxW="70ch"
        mb={8}
      >
        <SearchBar
          onChange={handleChange}
          value={search}
          handleTrue={handleTrue}
          handleFalse={handleFalse}
          trueVal={filter[0]}
          falseVal={filter[1]}
        />
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