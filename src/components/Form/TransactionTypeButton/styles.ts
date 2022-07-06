import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1.5px solid ${({theme}) => theme.colors.text};
  border-radius: 5px;

  padding: 16px 59px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.poppins.regular};
  font-size: ${RFValue(14)}px;
`;
