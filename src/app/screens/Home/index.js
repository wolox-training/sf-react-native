import React from 'react';
import { View } from 'react-native';

import CustomText from '../../components/CustomText';

import Footer from './components/Footer';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <CustomText style={styles.mainButton}>Welcome to RN Training!!!</CustomText>
      <Footer />
    </View>
  );
}
