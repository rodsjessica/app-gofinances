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
  flex: 1;
  width: 100%;
`;

export const Icon = styled(Feather)``;

export const Name = styled.Text``;
