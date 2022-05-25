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

interface IHighlightCardProps {
  type: string;
  title: string;
  amount: string;
  lastTransaction: string;
}
// commit teste
export const HighlightCard: React.FC<IHighlightCardProps> = ({
  type,
  title,
  amount,
  lastTransaction,
}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name={type} />
      </Header>

      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};
