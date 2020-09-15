/**
 * Главная страица
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {STYLES} from 'styles/Theme';

export const HomeScreen = () => {
  return (
    <View style={[STYLES.container, styles.container]}>
      <Text style={styles.title}>О нашем приложении</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
