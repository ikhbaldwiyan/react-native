import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

import Layout from '../pages/Layout';
import FeaturedArticles from '../components/FeaturedArticles'; 

const ArticleList = ({ navigation, featuredArticles, article, name }) => {
  return (
    <Layout>
      <ScrollView>
        <FeaturedArticles data={featuredArticles} />
        <View>
          <Text style={styles.latestArticle}>Latest {name} Articles</Text>
          {article.map((item, idx) => (
            <View key={idx} style={styles.container}>
              <View>
                <View style={styles.category}>
                  <Text style={styles.textCategory}>{item.tag}</Text>
                </View>
                <View style={styles.articleCard}>
                  <ImageBackground
                    style={{ flex: 1 }}
                    imageStyle={{ borderRadius: 8 }}
                    resizeMode="cover"
                    source={{uri: item.thumb}}></ImageBackground>
                </View>
                <View style={styles.author}>
                  <Text style={styles.authorText}>{item.time}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={{marginVertical: 3, fontWeight: '500'}}>{item.author}</Text>
                <Text style={styles.description}>{item.desc}</Text>
                <Text
                  onPress={() => navigation.navigate('Home')}
                  style={styles.button}>
                  Read More
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ArticleList;

const styles = StyleSheet.create({
  latestArticle: {
    marginTop: 15,
    fontWeight: '500',
    marginLeft: 16,
    fontSize: 20,
    color: '#2d283e',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  title: {
    fontSize: 16,
    color: '#2d283e',
    fontWeight: '500',
    maxWidth: 200,
    marginTop: 10,
  },
  articleCard: {
    padding: 6,
    width: 140,
    height: 140,
    backgroundColor: '#564f6f',
    margin: 15,
    marginTop: 4,
    marginBottom: 4,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  category: {
    width: 140,
    padding: 5,
    marginLeft: 15, 
    marginTop: 15,
    backgroundColor: '#423d54' ,
    color: 'white',
    borderTopEndRadius: 15,
  },
  textCategory: {
    color: 'white',
    marginLeft: 5
  },
  author: {
    width: 140,
    padding: 5,
    marginLeft: 15, 
    backgroundColor: '#2d283e' ,
    color: 'white',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authorText: {
    color: 'white',
  },
  description: {
    marginTop: 3,
    maxWidth: 200,
    color: '#564f6f',
  },
  button: {
    color: 'white',
    backgroundColor: '#802bd1',
    width: 90,
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
    marginRight: 180,
  },
});
