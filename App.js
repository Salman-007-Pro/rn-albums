//main
import React from 'react';

//components
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from './src/Components/Header/Header';
import AlbumsList from './src/Components/AlbumsList/AlbumsList';

const App = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Header headerText="Albums" />
      <AlbumsList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
