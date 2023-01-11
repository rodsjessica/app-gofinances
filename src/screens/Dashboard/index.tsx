import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import {
  HighlightCard,
  IHighlightCardProps,
} from '../../components/HighlightCard';
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
  LoadContainer,
} from './styles';

export interface DataCardProps extends IHighlightCardProps {
  id: any;
}
export interface DataListProps extends TransactionCardProps {
  id: any;
}

interface HighlightProps {
  amount: string;
}
interface HighlightData {
  entries: HighlightProps;
  expensive: HighlightProps;
  total: HighlightProps;
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactionsData, setTransactionsData] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData,
  );

  const theme = useTheme();

  async function loadTransactions() {
    const collectionKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(collectionKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        return {
          id: item.id,
          name: item.name,
          amount: Number(item.amount).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }),
          type: item.type,
          category: item.category,
          date: Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          }).format(new Date(item.date)),
        };
      },
    );
    ('');

    setTransactionsData(transactionsFormatted);

    const total = entriesTotal - expensiveTotal;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
      expensive: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
    });

    setIsLoading(false);
    console.log('---------------->', highlightData);
  }

  useEffect(() => {
    loadTransactions();

    const collectionKey = '@gofinances:transactions';
    AsyncStorage.removeItem(collectionKey);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  return (
    <Container>
      {isLoading === true ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
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
              type="positive"
              title="Entradas"
              amount={highlightData.entries.amount}
              lastTransaction="Última entrada dia 13 de Abril"
            />
            <HighlightCard
              type="negative"
              title="Saídas"
              amount={highlightData.expensive.amount}
              lastTransaction="Última saída dia 03 de Abril"
            />
            <HighlightCard
              type="positive"
              title="Total"
              amount={highlightData.total.amount}
              lastTransaction="01 à 16 de Abril"
            />
          </HighlightCards>
          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={transactionsData}
              keyExtractor={item => item.id}
              renderItem={({item}) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
}
