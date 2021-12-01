import React from 'react';
import { Row, Collapse, Col, Typography, Avatar } from 'antd';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';

import { Loader } from '../components';
import { useGetExchangesQuery } from '../services/cryptoApi';

const { Panel } = Collapse;
const { Text, Title } = Typography;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangeList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className='page-title'>
        Exchanges
      </Title>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangeList.map((exchange) => (
          <Col key={exchange.id} span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id} style={{ width: '100%' }}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}</strong>
                      </Text>
                      <Avatar
                        className='exchange-image'
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>${millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>${millify(exchange.marketShare)}</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
