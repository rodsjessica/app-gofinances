import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Title, Icon} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface IProps extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
}

export function TransactionTypeButton({title, type, ...rest}: IProps) {
  return (
    <Container {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
