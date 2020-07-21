import React, { Component } from 'react';
import { GridList } from 'react-native-elements';
const data = [
  { id: 1, img: require('../../assets/images/bg_screen1.jpg'), featured: true, content: '1' },
  { id: 2, img: require('../../assets/images/bg_screen2.jpg'), featured: false, content: '2' },
  { id: 3, img: require('../../assets/images/bg_screen3.jpg'), featured: false, content: '3' },
  { id: 4, img: require('../../assets/images/bg_screen4.jpg'), featured: true, content: '4' },
  { id: 5, img: require('../../assets/images/wallpaper_1.jpg'), featured: false, content: '5' },
  { id: 6, img: require('../../assets/images/wallpaper_2.jpg'), featured: false, content: '6' },
  { id: 7, img: require('../../assets/images/wallpaper_3.jpg'), featured: false, content: '7' },
  { id: 8, img: require('../../assets/images/wallpaper_4.jpg'), featured: false, content: '8' },
  { id: 9, img: require('../../assets/images/wallpaper_1.jpg'), featured: false, content: '9' },
  { id: 10, img: require('../../assets/images/wallpaper_2.jpg'), featured: false, content: '10' },
];

class ImageGridList extends Component {
  render() {
    return (
      <>
        <Header title="Grid List" />
        <GridList data={data} column={3} itemHeight={80} featureHeight={180} />
      </>
    );
  }
}

export default ImageGridList;
