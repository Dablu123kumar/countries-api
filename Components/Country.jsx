import React, { useEffect, useState ,useContext} from "react";
import "./Country.css";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryShimmer from "./CountryShimmer";
import { useOutletContext } from 'react-router-dom';
import { ThemeContext } from "../Contexts/TheamContext";
import { UseTheme } from "../hooks/UseTheme";
function Country() {
  const [isDark] =UseTheme()
    const params = useParams()
    const {state} = useLocation()
    const countryName = params.country
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] =useState(false)
//   const countryName = new URLSearchParams(window.location.search).get(`name`);
function updateCountry(data){
  setCountryData({
    Flag:data.flags.svg,
  name: data.name.common,
  nativeName: Object.values(data.name.nativeName || {})[0]?.common,
  population: data.population,
  region: data.region,
  SubRegion: data.subregion,
  Capital: data.capital?.join(' ,'),
  TLD: data.tld,
  Currencies: Object.values(data.currencies || {}).map((currency) => currency.name),
  Languages: Object.values(data.languages || {}).join(', '),
  borders:[],
});

// fetch borders country name
if(!data.borders){
  data.borders = []
}
Promise.all( data.borders.map((border) => {
return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
.then((res) => res.json())
.then(([borderCountries]) => borderCountries.name.common)
})).then((borders) => {
   setTimeout( () => setCountryData((prevState) => ({...prevState, borders}))
  )
})
}
  useEffect(() => {
  if(state){
    updateCountry(state)
    return
  }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data);
        updateCountry(data)
      })
      .catch(Error => {
        setNotFound(true)
      })
      
  }, [countryName]);
  if(notFound){
    return <div>Country Not Found</div>
  }
  return countryData === null ? (
    <CountryShimmer/>
  ) : (
    
    <main className = {`${isDark ? 'dark' : '' }`}>
      
      <span  onClick={() =>history.back()} className="back-button" >
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="details-container">
        <img src={countryData.Flag} alt="" />
        <div className="details">
          <h2>{countryData.name}</h2>
          <div className="details-text">
            <div className="details1">
              <p>
                <b>Native Name: </b>
                {countryData.nativeName || countryData.name}
                <span className="native-name"></span>{" "}
              </p>
              <p>
                <b>Population: </b>{" "}
                <span className="population">
                  {countryData.population.toLocaleString("en-IN")}
                </span>
              </p>
              <p>
                <b>Region: </b>{" "}
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>{" "}
                <span className="sub-region">{countryData.SubRegion}</span>
              </p>
              <p>
                <b>Capital: </b>{" "}
                <span className="capital">{countryData.Capital}</span>
              </p>
            </div>
            <div className="details2">
              <p>
                <b>Top Level Domain: </b>{" "}
                <span className="tld">{countryData.TLD}</span>
              </p>
              <p>
                <b>Currencies: </b>{" "}
                <span className="currencies">{countryData.Currencies}</span>
              </p>
              <p>
                <b>Languages: </b>{" "}
                <span className="languages">{countryData.Languages}</span>
              </p>
            </div>
          </div>
         { countryData.borders.length !== 0 && <div className="border-countries">
              <b>Border Countries: </b>
              {
                countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)
              }
          </div>}
        </div>
      </div>
    </main>
  );
}

export default Country;
