import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Navbar from '../../widgets/containers/navbar';
import Banner from '../../widgets/containers/banner';
import Products from '../../products/containers/products';
import Services from '../../services/containers/services';
import Image from '../../widgets/containers/image';
import Footer from '../../widgets/containers/footer';


class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Navbar />
        <Banner />
        <Products />
        <Services />
        <Image />
        <Footer />
      </HomeLayout>
    )
  }
}

export default Home;