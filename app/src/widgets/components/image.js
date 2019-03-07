import React from 'react';

const Image = (props) => (
  <figure style={{
    backgroundImage: `url(${props.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100%',
    padding: '10em'
  }}>
    <h1 className="title is-size-5">{props.title}</h1>
  </figure>
)

export default Image;