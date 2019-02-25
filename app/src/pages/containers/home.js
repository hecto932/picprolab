import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Navbar from '../../widgets/containers/navbar';


class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Navbar />
      </HomeLayout>
    )
  }
}

export default Home;