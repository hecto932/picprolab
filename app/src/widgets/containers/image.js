import React, { Component } from 'react';
import Image from '../components/image';
import imgBanner from '../../../assets/img/banners/banner-4.jpeg';

class ImageContainer extends Component {
  render () {
    return (
      <Image 
        title={'Our Wall Frames'}
        src={imgBanner}
      />
    )
  }
}

export default ImageContainer;