import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../components/Header';
import HomeList from '../components/HomeList';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <Header />
      <HomeList navigation={navigation} />
    </ScrollView>
  );
};

export default Home;
