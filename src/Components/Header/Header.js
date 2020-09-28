import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({headerText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  heading: {
    fontSize: 24,
  },
});

export default Header;
