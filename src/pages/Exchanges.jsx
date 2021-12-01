import React from 'react';
import { Loader } from '../components';
import { useGetExchangesQuery } from '../services/cryptoApi';

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;

  return <div>Exchanges</div>;
};

export default Exchanges;
