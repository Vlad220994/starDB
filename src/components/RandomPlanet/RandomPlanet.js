import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import './RandomPlanet.css';


export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ 
      planet,
      loading: false,
      error: false
    });
  } 

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*25)+1;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render () {

    const { planet, loading, error } = this.state;

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null; 
    const content = !(loading || error) ? <PlanetView planet={ planet } /> : null;

    return(
      <section className="RandomPlanet">
        { errorMessage }
        { spinner }
        { content }
      </section>
    );
  }
}


const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return(
    <Fragment>
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
    </Fragment>
  );
}