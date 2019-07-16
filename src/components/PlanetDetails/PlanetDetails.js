import React from 'react';
import './PlanetDetails.css';

const PlanetDetails = () => {
  return(
    <section className="PlanetDetails">
      <img src="https://cdn.playbuzz.com/cdn//e9d631b2-6406-48b5-85e0-aa99790402df/650ecdd3-d6d0-45fd-b3a0-131ca107c484.jpg" alt="planet" />
      <div>
        <h2>Planet Name</h2>
        <ul>
          <li>Population 1111</li>
          <li>Rotation Period 43</li>
          <li>Diametr 43</li>
        </ul>
      </div>
    </section>
  );
}

export default PlanetDetails;
