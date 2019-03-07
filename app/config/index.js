const labPrints = require('../assets/img/services/2.jpg');
const acrilicMetals = require('../assets/img/services/4.jpg');
const photoBook = require('../assets/img/services/1.jpg');
const canvas = require('../assets/img/services/3.jpg');


const config = {
  products: [],
  services: [
    {
      name: 'Lab prints',
      image: labPrints 
    },
    {
      name: 'Acrilic & Metals prints',
      image: acrilicMetals
    },
    {
      name: 'Photo Books',
      image: photoBook
    },
    {
      name: 'Canvas',
      image: canvas
    },
  ]
};

module.exports = config;