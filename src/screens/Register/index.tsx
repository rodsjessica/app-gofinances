import React from 'react';
import {Container, Header, Title, Form, Fields} from './styles';
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

          <TransactionTypeButton title="Income" type="up" />
          <TransactionTypeButton title="Income" type="up" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
