import CountryCard from "./CountryCard";
import { useState, useEffect } from "react";
import CountryLishtShimmer from "./CountryLishtShimmer";

function CountriesContainer({ query, filter }) {
  const [CountriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,flags,population,currencies,languages,tld,borders")
      .then((res) => res.json())
      // .then(renderContries)   //1st method
      .then((data) => {
        setCountriesData(data);
      })
      .catch((error)=>{
        console.log(error)
      })
  }, []);
  console.log(CountriesData)
  return (
    <>
      {!CountriesData.length ? (
        <CountryLishtShimmer />
      ) : (
        <div className="country-container">
          {CountriesData.filter((country) =>
            country.name.common.toLowerCase().includes(query) ||  country.region.toLowerCase().includes(query)
          ).map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                Region={country.region}
                capital={country.capital?.[0]}
                data= {country}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default CountriesContainer;
