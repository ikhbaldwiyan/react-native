import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Article from './pages/Article';
import SplashScreen from './pages/SplashScreen';
import Tech from './pages/Tech';
import Games from './pages/Games';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
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
        <Stack.Screen
          name="Tech"
          component={Tech}
          options={{
            title: 'Tech',
            headerStyle: { backgroundColor: '#2D283e' },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Games"
          component={Games}
          options={{
            title: 'Games',
            headerStyle: { backgroundColor: '#2D283e' },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
