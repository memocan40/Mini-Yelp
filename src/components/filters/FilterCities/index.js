import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function CityFilter({ cities }) {
  return (
    <div class="city-filter">
      {cities.map((city) => {
        return (
          <Link className="city-option" key={city.id} to={`/filtered/city/${city.id}`}>
            {city.name}
          </Link>
        );
      })}
    </div>
  );
}
