import React from 'react';
import { ScrollView, View } from 'react-native';

import Header from './components/Header';
import HomeList from './components/HomeList';
import BottomNavigation from './components/BottomNavigation';

const App = () => {
  return (
    <>
      <ScrollView>
        <View>
          <Header />
          <HomeList />
        </View>
      </ScrollView>
      <BottomNavigation />
    </>
  );
};

export default App;
