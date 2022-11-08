import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

export interface IHighlightCardProps {
  typeIcon: string;
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  lastTransaction: string;
}

export interface Props {
  data: IHighlightCardProps;
}

export function HighlightCard({data}: Props) {
  return (
    <Container>
      <Header>
        <Title>{data.title}</Title>
        <Icon name={data.typeIcon} type={data.type} />
      </Header>

      <Footer>
        <Amount>{data.amount}</Amount>
        <LastTransaction>{data.lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};
