import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const Header = () => {
  const [days, setDays] = useState('Good Morning');
  const [icon, setIcon] = useState(require('../../icon/night.png'));

  const date = new Date();
  const time = date.getHours();

  useEffect(() => {
    if (time < 12) {
      setDays('Good Morning');
      setIcon(require('../../icon/morning.png'));
    } else if (time < 18) {
      setDays('Good Afternoon');
      setIcon(require('../../icon/sun.png'));
    } else {
      setDays('Good Night');
      setIcon(require('../../icon/night.png'));
    }
  }, [days, time]);

  const Welcome = ({ name }) => (
    <>
      <Image style={styles.dayImage} source={icon} />
      <Text style={styles.headerText}>
        {days} <Text style={{ fontWeight: 'bold' }}>{name}</Text>
      </Text>
    </>
  );

  return (
    <View style={styles.header}>
      <Welcome name="Ikhbal" />
      <View>
        <Image
          style={{ width: 26, height: 26 }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#802bb1',
    padding: 20,
    flexDirection: 'row',
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 17,
    marginTop: 3,
  },
  dayImage: {
    width: 30,
    height: 30,
    marginRight: 8,
    justifyContent: 'center',
  },
});

export default Header;
