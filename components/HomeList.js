import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const menu = [
  {
    text: 'Articles',
    img: { uri: 'https://cdn-icons.flaticon.com/png/512/3652/premium/3652927.png?token=exp=1634134304~hmac=6ed471c2080deefb93366db3b3a8fb05' },
  },
  {
    text: 'Images',
    img: { uri: 'https://cdn-icons-png.flaticon.com/512/342/342362.png' },
  },
  {
    text: 'News',
    img: {
      uri: 'https://cdn-icons.flaticon.com/png/512/4961/premium/4961197.png?token=exp=1634135092~hmac=c41e6048a9b81d40ae8b012063fde442',
    },
  },
  {
    text: 'Website',
    img: { uri: 'https://cdn-icons-png.flaticon.com/512/5482/5482050.png' },
  },
];

const HomeList = ({ navigation }) => {
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.title}>Inzoid Media</Text>
        <Image
          style={styles.bannerImage}
          source={require('../icon/banner.png')}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        {menu.map((menu, idx) => (
          <View key={idx} style={styles.container}>
            <Image style={styles.icon} source={menu.img} />
            <Text style={styles.text}>{menu.text}</Text>
            <Text
              onPress={() => navigation.navigate('Article')}
              style={styles.button}
            >
              See
            </Text>
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
    marginTop: 15 
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
    fontWeight: '500'
  },
  button: {
    color: 'white',
    backgroundColor: '#802bd1', 
    padding: 10,
    borderRadius: 8,
  }
});

export default HomeList;
