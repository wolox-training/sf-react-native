import React from 'react';
import { View, Image } from 'react-native';

import CustomText from '../../components/CustomText';
import defaultImage from '../Books/defaultImage.jpeg';

import { strings } from './strings';
import styles from './styles';

const defaultProfile = {
  id: 0,
  author: 'Author',
  title: 'Title',
  genre: 'Genre',
  publisher: 'Publisher',
  year: 'Year',
  image_url: null
};

const BookDetails = () => {
  const profile = this.props.navigation.getParam('profile', defaultProfile);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={profile.image_url ? { uri: profile.image_url } : defaultImage} />
      <CustomText>{`${strings.title}${profile.title}`}</CustomText>
      <CustomText>{`${strings.author}${profile.author}`}</CustomText>
      <CustomText>{`${strings.genre}${profile.genre}`}</CustomText>
      <CustomText>{`${strings.publisher}${profile.publisher}`}</CustomText>
      <CustomText>{`${strings.year}${profile.year}`}</CustomText>
    </View>
  );
};

export default BookDetails;
