import React from 'react';
import {Container, Header, Title} from './styles';

interface CategoryProps {
  key: string;
  name: string;
}

interface IProps {
  category: string;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

export function Category({category, setCategory, closeSelectCategory}: IProps) {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
    </Container>
  );
}
