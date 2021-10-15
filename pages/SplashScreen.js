import React, { useEffect } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 1000);
  }, [])

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.bannerImage}
        source={require('../src/icon/images/floating.png')}
      />
      <Text style={styles.title}>Inzoid Media</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#564f6f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bannerImage: {
    width: 350,
    height: 350,
    marginTop: 10,
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 4,
    fontWeight: '600',
    color: 'white',
  }
});
