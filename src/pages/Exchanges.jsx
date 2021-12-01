import React from 'react';
import { useGetExchangesQuery } from '../services/cryptoApi';

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  if (isFetching) return 'Loading...';

  return <div>Exchanges</div>;
};

export default Exchanges;
