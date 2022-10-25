import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Dashboard} from '../screens/Dashboard';
import {Register} from '../screens/Register';

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Listagem" component={Dashboard} />
      <Tab.Screen name="Cadastrar" component={Register} />
      <Tab.Screen name="Resumo" component={Register} />
    </Tab.Navigator>
  );
};
