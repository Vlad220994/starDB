import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  constructor() {
    super();
    this.updatePlanet();
  };

  updatePlanet() {

    const id = Math.floor(Math.random()*25)+1;
    
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        });
      });
  }

  render () {

    const { id, name, population, rotationPeriod, diameter } = this.state;

    return(
      <section className="RandomPlanet">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
        <div>
          <h2>{ name }</h2>
          <ul>
            <li>
              <span>Population </span>
              <span>{ population }</span>
            </li>
            <li>
              <span>Rotation Period </span>
              <span>{ rotationPeriod }</span>
            </li>
            <li>
              <span>Diametr </span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
