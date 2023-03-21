import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { HistoryCard } from '../../components/HistoryCard';
import {
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
} from './styles';
import { categories } from '../../utils/categories';


interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percentFormatted: string;
  percent: number;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    [],
  );
  const theme = useTheme();

  async function loadData() {
    const collectionKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(collectionKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (item: TransactionData) => item.type === 'negative',
    );

    const expensivesTotal = expensives.reduce((accumulator: number, expensive: TransactionData) => {
      return accumulator + Number(expensive.amount)
    }, 0)

    const totalByCategory: CategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach((item: TransactionData) => {
        if (item.category === category.key) {
          categorySum += Number(item.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const percent = (categorySum / expensivesTotal * 100);
        const percentFormatted = `${percent.toFixed(0)}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent,
          percentFormatted,
        });

      }

    });
    setTotalByCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: useBottomTabBarHeight(),
        }}
      >
        <MonthSelect>
          <MonthSelectButton>
            <MonthSelectIcon name='chevron-left'></MonthSelectIcon>
          </MonthSelectButton>

          <Month>Março</Month>

          <MonthSelectButton>
            <MonthSelectIcon name='chevron-right'></MonthSelectIcon>
          </MonthSelectButton>
        </MonthSelect>

        <ChartContainer>
          <VictoryPie
            data={totalByCategories}
            x="percentFormatted"
            y="total"
            colorScale={totalByCategories.map((category) => category.color)}
            style={{
              labels: {
                fontSize: RFValue(16),
                fontWeight: 'bold',
                fill: theme.colors.shape,
              }
            }}
            labelRadius={50}
          />
        </ChartContainer>


        {totalByCategories.map(item => (
          <HistoryCard
            key={item.key}
            color={item.color}
            title={item.name}
            amount={item.totalFormatted}
          />
        ))}
      </Content>
    </Container>
  );
}
