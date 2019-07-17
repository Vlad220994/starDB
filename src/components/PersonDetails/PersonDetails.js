import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import './PersonDetails.css';

export default class PersonDetails extends Component {
  
  swapiService = new SwapiService();

  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } =this.props;
    if(!personId){
      return; 
    }

    this.swapiService
    .getPerson(personId)
    .then((person) => {
      this.setState({ person });
    });
  };

  

  render () {

    if(!this.state.person) {
      return <span>Select a person from a list</span>
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return(
      <section className="PersonDetails">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="starship" />
        <div>
          <h2>{ name }</h2>
          <ul>
            <li>Gender { gender }</li>
            <li>Bright year { birthYear }</li>
            <li>Eye color { eyeColor }</li>
          </ul>
        </div>
      </section>
    );
  }
}
