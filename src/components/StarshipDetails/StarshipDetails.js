import React from 'react';
import './StarshipDetails.css';

const StarshipDetails = () => {
  return(
    <section className="StarshipDetails">
      <img src="https://www.thegadgetstore.ie/user/products/large/r2d2-robot-star-wars-droid-interactive-wifi-rc.png" alt="starship" />
      <div>
        <h2>R2-D2</h2>
        <ul>
          <li>Gender male</li>
          <li>Bright year 43</li>
          <li>Eye color red</li>
        </ul>
      </div>
    </section>
  );
}

export default StarshipDetails;
