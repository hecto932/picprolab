import React from 'react';

const Banner = (props) => (
  <div className="">
    <section className="hero is-white">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-grey-light has-text-centered has-text-weight-light">
            Helping to create memories from 1994
          </h1>
          <figure>
            <img className="image" src={props.urlImage} width="100%" />
          </figure>
        </div>
      </div>
    </section>
  </div>
);

export default Banner;