import React from 'react';
import {FlatList} from 'react-native';
import {categories} from '../../utils/categories';
import {Container, Header, Title, CategoryItem, Icon, Name} from './styles';

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
      <FlatList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <CategoryItem>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryItem>
        )}
      />
    </Container>
  );
}
