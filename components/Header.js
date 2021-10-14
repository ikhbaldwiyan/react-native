import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import MorningIcon from '../src/icon/home/morning.png';
import AfeternoonIcon from '../src/icon/home/sun.png';
import EveningIcon from '../src/icon/home/evening.png';
import NightIcon from '../src/icon/home/night.png';
import UserIcon from '../src/icon/home/account.png';

const Header = () => {
  const [days, setDays] = useState('Good Morning');
  const [icon, setIcon] = useState(MorningIcon);

  const date = new Date();
  const time = date.getHours();

  useEffect(() => {
    if (time < 12) {
      setDays('Good Morning');
      setIcon(MorningIcon);
    } else if (time < 17) {
      setDays('Good Afternoon');
      setIcon(AfeternoonIcon);
    } else if (time < 18) {
      setDays('Good Evening')
      setIcon(EveningIcon);
    } else {
      setDays('Good Night');
      setIcon(NightIcon);
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
      <TouchableOpacity onPress={() => alert('Account')}>
        <Image style={{ width: 32, height: 32 }} source={UserIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2d283e',
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
