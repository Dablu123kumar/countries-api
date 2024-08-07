import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ name, flag, population, Region, capital,data }) {
  return (
   <Link to={`/${name}`} state = {data}>
     <div className="countryCard">
      <img src={flag} alt={name + "Flag"} />
      <div className="cardText">
        <h3>{name}</h3>
        <p>
          <b>Popolation: </b>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {Region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </div>
   </Link>
  );
}

export default CountryCard;
