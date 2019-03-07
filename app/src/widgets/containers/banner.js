import React, { Component } from 'react';
import Banner from '../components/banner';
import imgBanner from '../../../assets/img/banners/banner-1.jpeg';

class BannerContainer extends Component {
  render(props) {
    return (
      <Banner urlImage={imgBanner} />
    );
  }
}

export default BannerContainer;