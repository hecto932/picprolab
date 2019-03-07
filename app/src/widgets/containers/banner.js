import React, { Component } from 'react';
import Banner from '../components/banner';
import imgBanner1 from '../../../assets/img/banners/banner-1.jpeg';
import imgBanner2 from '../../../assets/img/banners/banner-2.jpeg';
import imgBanner3 from '../../../assets/img/banners/banner-3.jpg';

class BannerContainer extends Component {
  componentDidMount() {
    let position = 0;
    const slider = document.getElementById('bannerImages');
    const listImages = [
      imgBanner1,
      imgBanner2,
      imgBanner3
    ];
    const timeToChange = 3000;

    setInterval(() => {
      if (position === listImages.length) {
        position = 0;
      }
      slider.src = listImages[position];
      position++;
    }, timeToChange);
  }
  render(props) {
    return (
      <Banner urlImage={imgBanner1} />
    );
  }
}

export default BannerContainer;