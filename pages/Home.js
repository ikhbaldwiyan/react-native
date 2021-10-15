import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../components/Header';
import HomeList from '../components/HomeList';
import Layout from './Layout';

const Home = ({navigation}) => {
  return (
    <Layout>
      <ScrollView>
        <Header />
        <HomeList navigation={navigation} />
      </ScrollView>
    </Layout>
  );
};

export default Home;
