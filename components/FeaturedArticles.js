import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';

const FeaturedArticles = ({ data }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {data.map((item, idx) => (
          <View key={idx}>
            <View style={styles.card}>
              <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                imageStyle={{ borderRadius: 8 }}
                source={item.img}>
                <Text style={styles.tag}>{item.tag}</Text>
              </ImageBackground>
            </View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FeaturedArticles;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#564f6f',
  },
  card: {
    padding: 8,
    width: 200,
    height: 130,
    backgroundColor: '#2d283e',
    margin: 15,
    borderRadius: 10,
  },
  tag: {
    color: 'white',
    backgroundColor: '#2d283e',
    width: 100,
    padding: 2,
    fontSize: 13,
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    paddingBottom: 5
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    maxWidth: 200,
    marginBottom: 3,
  },
  author: {
    marginLeft: 20,
    marginTop: 5,
    color: 'ghostwhite',
    marginBottom: 10,
  },
});
