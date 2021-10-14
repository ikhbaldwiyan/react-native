import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const menu = [
  {
    text: 'Home',
    img: {uri: 'https://cdn-icons.flaticon.com/png/512/3274/premium/3274982.png?token=exp=1634134963~hmac=89fcd07d91a169b315fef873453086a4'},
  },
  {
    text: 'Games',
    img: {
      uri: 'https://cdn-icons-png.flaticon.com/512/4372/4372230.png',
    },
  },
  {
    text: 'Search',
    img: {uri: 'https://cdn-icons-png.flaticon.com/512/3077/3077325.png'},
  },
  {
    text: 'Media',
    img: {uri: 'https://cdn-icons.flaticon.com/png/512/2518/premium/2518048.png?token=exp=1634134408~hmac=de7ff503a2e5df9e8ac3eab81d2d9e70'},
  },
  {
    text: 'Inbox',
    img:{uri: 'https://cdn-icons-png.flaticon.com/512/262/262591.png'},
  },
];

const BottomNavigation = () => {
  return (
    <View style={styles.navigation}>
      {menu.map((menu, idx) => (
        <View key={idx} style={styles.menu}>
          <TouchableOpacity>
            <Image style={styles.icon} source={menu.img} />
            <Text style={styles.text}>{menu.text}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    height: 84,
    backgroundColor: '#564f6f',
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
