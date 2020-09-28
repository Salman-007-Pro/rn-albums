import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import AlbumDetail from '../AlbumDetail/AlbumDetail';
import axios from 'axios';
const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          'https://rallycoding.herokuapp.com/api/music_albums',
        );
        setAlbums(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAlbums();
  }, []);
  return (
    <FlatList
      data={albums}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return <AlbumDetail data={item} />;
      }}
    />
  );
};

export default AlbumsList;

const styles = StyleSheet.create({});
