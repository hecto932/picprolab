import React, { Component } from 'react';
import Services from '../components/services';
import config from '../../../config';

class ServicesContainer extends Component {
  render () {
    return (
      <Services items={config.services} />
    )
  }
}

export default ServicesContainer;