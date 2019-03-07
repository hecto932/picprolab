import React from 'react';

const Services = (props) => (
  <section className="hero is-medium is-success is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Services
        </h1>
        <h2 className="subtitle">
          What do you need ?
        </h2>
        <div className="container">
          <div className="columns is-desktop">
            {props.items.map((e, index) => {
              return (
                <div key={index} className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={e.image} alt={e.name} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media-content">
                        <p className="has-text-black has-text-centered">{e.name}</p>
                      </div>
                      <div className="content">
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <hr />
        <a href="#"><h3 className="title has-text-white has-text-centered">See more...</h3></a>
      </div>
    </div>
  </section>
)

export default Services;
