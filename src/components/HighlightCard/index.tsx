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
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  positive: 'arrow-up-circle',
  negative: 'arrow-down-circle',
  total: 'dollar-sign',
};

export function HighlightCard({
  type,
  title,
  amount,
  lastTransaction,
}: IHighlightCardProps) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
