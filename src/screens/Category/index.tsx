import React from 'react';
import {FlatList} from 'react-native';
import {categories} from '../../utils/categories';
import {Button} from '../../components/Form/Button';
import {
  Container,
  Header,
  Title,
  CategoryItem,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

interface CategoryProps {
  key: string;
  name: string;
}

interface IProps {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

export function Category({category, setCategory, closeSelectCategory}: IProps) {
  function handleCategorySelect(category: CategoryProps) {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <CategoryItem
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button onPress={closeSelectCategory} title={'Selecionar'} />
      </Footer>
    </Container>
  );
}
