import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const navigation = [
  {
    text: 'Home',
    img: require('../../icon/home.png'),
  },
  {
    text: 'Search',
    img: require('../../icon/search.png'),
  },
  {
    text: 'Add',
    img: {
      uri: 'https://cdn-icons.flaticon.com/png/512/1176/premium/1176381.png?token=exp=1633966605~hmac=bfe351c6acb9f406a99f03e802c7bd9e',
    },
  },
  {
    text: 'Inbox',
    img: require('../../icon/mail.png'),
  },
  {
    text: 'Media',
    img: require('../../icon/sound.png'),
  },
];

const BottomNavigation = () => {
  return (
    <View style={styles.navigation}>
      {navigation.map((menu, idx) => (
        <View key={idx} style={styles.menu}>
          <Image style={styles.icon} source={menu.img} />
          <Text style={styles.text}>{menu.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    height: 84,
    backgroundColor: '#802bb1',
    flexDirection: 'row',
  },
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 36,
    width: 36,
  },
  text: {
    marginTop: 4,
    color: 'ghostwhite',
    fontSize: 16,
    fontWeight: '600'
  },
});

export default BottomNavigation;
