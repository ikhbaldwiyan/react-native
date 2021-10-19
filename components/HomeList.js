import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const menu = [
  {
    text: 'Articles',
    img: require('../src/icon/home/articles.png'),
    route: 'Article'
  },
  {
    text: 'Images',
    img: require('../src/icon/home/picture.png'),
    route: 'Tech'
  },
  {
    text: 'News',
    img: require('../src/icon/home/news.png'),
    route: 'Tech'
  },
  {
    text: 'Website',
    img: require('../src/icon/home/website.png'),
    route: 'Tech'
  },
];

const HomeList = ({ navigation }) => {
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.title}>Inzoid Media</Text>
        <Image
          style={styles.bannerImage}
          source={require('../src/icon/images/bro.png')}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        {menu.map((menu, idx) => (
          <View key={idx} style={styles.container}>
            <Image style={styles.icon} source={menu.img} />
            <Text style={styles.text}>{menu.text}</Text>
            <TouchableOpacity  onPress={() => navigation.navigate(menu.route)}>
              <Text style={styles.button}>Lihat</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 32,
    marginTop: 4,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#564f6f',
  },
  bannerImage: {
    width: 280,
    height: 180,
    marginTop: 15,
  },
  container: {
    padding: 15,
    backgroundColor: '#423d54',
    marginTop: 3,
    flexDirection: 'row',
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 40,
  },
  text: {
    color: 'ghostwhite',
    fontSize: 23,
    marginLeft: 10,
    flex: 1,
    fontWeight: '500',
  },
  button: {
    color: 'white',
    backgroundColor: '#802bd1',
    padding: 10,
    borderRadius: 8,
  },
});

export default HomeList;
