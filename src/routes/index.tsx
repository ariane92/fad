import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/Authentication/Onboarding';
const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <App.Screen name="Onboarding" component={Onboarding} />
    </App.Navigator>
  );
};

export default AppRoutes;
