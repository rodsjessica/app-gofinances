import React from 'react';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';
import {Input} from '../../components/Form/Input';
import {Button} from '../../components/Button';
import {TransactionTypeButton} from '../../components/Form/TransactionTypeButton';

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton title="Income" type="up" />
            <TransactionTypeButton title="Outcome" type="down" />
          </TransactionTypes>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
