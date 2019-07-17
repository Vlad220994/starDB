import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import './ItemList.css';

export default class ItemList extends Component {
  
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  }

  renderItems(array) {
    return array.map(({name, id}) => {
      return(
        <li 
          key={id} 
          onClick={() => {this.props.onItemSelected(id)}}
        >
          { name }
        </li>
      );
    });
  }

  render() {

    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />
    }

    const items = this.renderItems(peopleList);

    return(
      <section className="ItemList">
        <ul>
          { items }
        </ul>
      </section>
    );
  }
}
