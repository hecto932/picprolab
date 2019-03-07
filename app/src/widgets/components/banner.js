import React from 'react';
import './banner.scss';

const Banner = (props) => (
  <div className="">
    <section className="hero is-white">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-grey-light has-text-centered has-text-weight-light">
            Helping to create memories from 1994
          </h1>
        </div>
      </div>
    </section>
    <figure>
      <img id="bannerImages" className="image image-transition" src={props.urlImage} width="100%" />
    </figure>
  </div>
);

export default Banner;