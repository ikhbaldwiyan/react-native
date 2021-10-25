import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

import Layout from './Layout';
import { baseUrl } from '../src/constant/baseUrl';
import formatDescription from '../src/constant/formatDescription';

const ArticleDetail = ({route}) => {
  const [detail, setDetail] = useState([]);

  const detailUrl = `${baseUrl}/detail/${route.params.slug}`

  useEffect(() => {
    let isMounted = true;

    async function getDetail() {
      try {
        const response = await axios.get(detailUrl);
        const detail = response.data.results;
        isMounted && setDetail(detail)
      } catch (error) {
        console.log(error)
      }
    }
    getDetail();

    return () => {
      isMounted = false;
    };
  }, [detail]);

  return (
    <Layout>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{detail.title}</Text>
          <Text style={styles.author}>{detail.author} - {detail.date} </Text>
          <View>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: detail.thumb ? detail.thumb : 'https://i.stack.imgur.com/y9DpT.jpg' }}>
            </Image>
            <Text style={styles.description}>
              {formatDescription(detail.content)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ArticleDetail;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2d283e',
  },
  author: {
    marginTop: 4, 
    color: '#6c757d'
  },
  image: {
    marginVertical: 3,
    width: width - 30,
    height: 240,
    borderRadius: 15,
  },
  description: {
    fontSize: 16,
  }
});
