import React, { Component } from 'react';
import Banner from '../components/banner';
import imgBanner from '../../../assets/img/banner-1.jpg';

class BannerContainer extends Component {
  render(props) {
    return (
      <Banner urlImage={imgBanner} />
    );
  }
}

export default BannerContainer;