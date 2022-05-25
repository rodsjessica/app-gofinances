import React from 'react';
import {StatusBar} from 'react-native';
import {HighlightCard} from '../../components/HighlightCard';

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
} from './styles';

export function Dashboard() {
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
    </Container>
  );
}
