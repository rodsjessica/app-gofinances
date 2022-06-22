import React from 'react';
import {StatusBar} from 'react-native';
import {HighlightCard} from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: any;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '20/06/2022',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Nina',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '18/06/2022',
    },
    {
      id: '3',
      type: 'negative',
      title: 'ALuguel do Apartamento',
      amount: 'R$ 1.200,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '19/06/2022',
    },
  ];
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#5636D3'} />
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/71798290?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Jéssica</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="arrow-up-circle"
          title="Entradas"
          amount="17.400,00"
          lastTransaction="Última entrada dia 13 de Abril"
        />
        <HighlightCard
          type="arrow-down-circle"
          title="Saídas"
          amount="1.259,00"
          lastTransaction="Última saída dia 03 de Abril"
        />
        <HighlightCard
          type="dollar-sign"
          title="Total"
          amount="16.141,00"
          lastTransaction="01 à 16 de Abril"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
