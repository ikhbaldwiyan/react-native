import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function formatDescription(description) {
  let content = [];

  const renderImage = (img) => (
    <View style={{alignSelf: 'center'}}>
      <Image
        key={img}
        resizeMode="contain"
        style={styles.image}
        source={{ uri: img }}
      />
    </View>
  );

  const webView = (data) => (
    <WebView
      key={data}
      style={styles.youtube}
      source={{
        uri: data,
      }}
      scalesPageToFit={true}
    />
  )

  if (description) {
    description.shift();
    for (let i = 0; i < description.length; i++) {
      const index = description[i];
      if (index.includes('https://thelazy.media') || index.includes('http://thelazy.media')) {
        content.push(renderImage(index));
      } else if (index.includes('https://www.youtube.com/')) {
        content.push(webView(index));
      } else if(index.includes('\n')) {
        index.slice(0)
        console.log(index)
      } else {
        let desc = index;
        desc += '\n \n';
        content.push(desc);
      }
    }
  }

  return content;
}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: width - 30,
    height: 240,
    borderRadius: 8,
    marginBottom: 10,
  },
  youtube: {
    width: width - 30,
    height: 200,
    marginBottom: 15
  }
});