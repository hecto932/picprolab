import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Navbar from '../../widgets/containers/navbar';
import Banner from '../../widgets/containers/banner';


class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Navbar />
        <Banner />
      </HomeLayout>
    )
  }
}

export default Home;