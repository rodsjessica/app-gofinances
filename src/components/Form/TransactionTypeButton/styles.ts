import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-width: ${({isActive}) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.text};
  border-radius: 5px;

  padding: 16px;

  ${({isActive, type}) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({theme}) => theme.colors.sucess_light};
    `}

  ${({isActive, type}) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({theme}) => theme.colors.attention_light};
    `}
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({theme, type}) =>
    type === 'up' ? theme.colors.sucess : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.poppins.regular};
  font-size: ${RFValue(14)}px;
`;
