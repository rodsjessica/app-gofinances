import styled, {css} from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

interface TransactionProps {
  type: 'positive' | 'negative' | 'total';
}

export const Container = styled.View<TransactionProps>`
  background-color: ${({theme, type}) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TransactionProps>`
  font-family: ${({theme}) => theme.poppins.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<TransactionProps>`
  font-size: ${RFValue(40)}px;
  ${({type}) =>
    type === 'positive' &&
    css`
      color: ${({theme}) => theme.colors.sucess};
    `}
  ${({type}) =>
    type === 'negative' &&
    css`
      color: ${({theme}) => theme.colors.attention};
    `}
  ${({type}) =>
    type === 'total' &&
    css`
      color: ${({theme}) => theme.colors.shape};
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TransactionProps>`
  font-family: ${({theme}) => theme.poppins.regular};
  font-size: ${RFValue(32)}px;
  color: ${({theme}) => theme.colors.title};
  margin-top: 38px;
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const LastTransaction = styled.Text<TransactionProps>`
  font-family: ${({theme}) => theme.poppins.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.title};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
`;
