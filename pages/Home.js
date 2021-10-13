import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../components/Header';
import HomeList from '../components/HomeList';

const Home = () => {
  return (
    <ScrollView>
      <Header />
      <HomeList />
    </ScrollView>
  );
};

export default Home;
