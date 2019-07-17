export default class SwapiService {

  _apiBase ='https://swapi.co/api';

  async getResource(url) {
    
    const res = await fetch(`${this._apiBase}${url}`);
  
    if(!res.ok) {
      throw new Error(`Could not fetch`);
    }

    return await res.json();
  }

  async getAllPerson() {
    const res = await this.getResource('/people/');
    return  res.results.map(this._transormPerson);
  }

  async getPerson(id) {
    const people = this.getResource(`/people/${id}/`);
    return this._transormPerson(people);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transormPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transormPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transormStarship);
  }

  async getStarship(id) {
    const starship = this.getResource(`/starships/${id}/`);
    return this._transormStarship(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transormPlanet(planet) {

    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transormStarship(starship) {

    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transormPerson(person) {

    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}
