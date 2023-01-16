import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import Feather from 'react-native-vector-icons/Feather';

import {Dashboard} from '../screens/Dashboard';
import {Register} from '../screens/Register';
import {Resume} from '../screens/Resume';

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
        },
      }}>
      <Tab.Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="dollar-sign" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
