import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Article from './pages/Article';
import BottomNavigation from './components/BottomNavigation';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{
            title: 'Articles',
            headerStyle: { backgroundColor: '#2D283e' },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
