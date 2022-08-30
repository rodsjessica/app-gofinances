import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;

  background-color: ${({theme}) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;
`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.poppins.regular};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
`;
export const CategoryItem = styled.View`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.poppins.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  width: 100%;
  height: ${RFValue(1)}px;
  background-color: ${({theme}) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
