import React from 'react';
import { ScrollView, View } from 'react-native';

import Header from './android/components/Header';
import HomeList from './android/components/HomeList';
import BottomNavigation from './android/components/BottomNavigation';

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
