import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const menu = [
  {
    text: 'Article',
    img: { uri: 'https://cdn-icons-png.flaticon.com/512/2892/2892879.png' },
  },
  {
    text: 'Images',
    img: { uri: 'https://cdn-icons-png.flaticon.com/512/2659/2659360.png' },
  },
  {
    text: 'Repository',
    img: {
      uri: 'https://cdn-icons.flaticon.com/png/512/2822/premium/2822604.png?token=exp=1633967654~hmac=dc0a96ce556815c217357f6a92da537e',
    },
  },
  {
    text: 'Website',
    img: { uri: 'https://cdn-icons-png.flaticon.com/512/3719/3719350.png' },
  },
];

const HomeList = () => {
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.title}>Moxie Media</Text>
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
              onPress={() => alert(`This is ${menu.text}`)}
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
    backgroundColor: '#564f6f',
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
