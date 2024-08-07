import React from "react";

export default function SelectMenu({ setQuery }) {
  function filtered({setQuery}) {
    fetch(`https://restcountries.com/v3.1/region/america`)
      .then((res) => res.json())
      // .then(renderContries)     //1st method
      .then((data) => {
        //2nd methodz
        console.log(data)
        setFilter(data)
      });
  }

  return (
    <div>
      <select onChange={(e) =>  setQuery(e.target.value.toLowerCase())} className="filter">
        <option value="Africa" hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
