import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const menu = [
  {
    text: 'Home',
    img: require('../src/icon/nav/home.png'),
  },
  {
    text: 'Games',
    img: require('../src/icon/nav/games.png'),
  },
  {
    text: 'Search',
    img: require('../src/icon/nav/search.png'),
  },
  {
    text: 'Media',
    img: require('../src/icon/nav/media.png'),
  },
  {
    text: 'Inbox',
    img: require('../src/icon/nav/inbox.png'),
  },
];

const BottomNavigation = () => {
  return (
    <View style={styles.navigation}>
      {menu.map((menu, idx) => (
        <View key={idx} style={styles.menu}>
          <TouchableOpacity>
            <View style={styles.wrapper}>
              <Image style={styles.icon} source={menu.img} />
              <Text style={styles.text}>{menu.text}</Text>
            </View>
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
    fontWeight: '600',
  },
  wrapper: {
    alignItems: 'center',
  },
});

export default BottomNavigation;
