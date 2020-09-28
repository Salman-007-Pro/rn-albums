import React from 'react';
import {StyleSheet, Text, View, Image, Button, Linking} from 'react-native';
import Card from '../Card/Card';
import CardItem from '../CardItem/CardItem';

const AlbumDetail = ({data}) => {
  const {title, artist, thumbnail_image, image, url} = data;
  return (
    <Card>
      <CardItem>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnailImage}
            source={{uri: thumbnail_image}}
          />
          <View style={styles.albumNameStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </View>
      </CardItem>
      <CardItem>
        <Image style={styles.ImageStyle} source={{uri: image}} />
      </CardItem>
      <CardItem>
        <Button title="Buy Now" onPress={() => Linking.openURL(url)} />
      </CardItem>
    </Card>
  );
};

export default AlbumDetail;

const styles = StyleSheet.create({
  albumNameStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  thumbnailContainer: {
    flexDirection: 'row',
  },
  thumbnailImage: {
    height: 50,
    width: 50,
  },
  ImageStyle: {
    width: null,
    height: 300,
    flex: 1,
  },
});
