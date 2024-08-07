
import {useState} from 'react'
import "/App.css";
import SearcBar from "/Components/SearcBar";
import SelectMenu from "/Components/SelectMenu";
import CountriesContainer from "/Components/CountriesContainer";
import { UseTheme } from '../hooks/UseTheme';

function Home() {
    const [query,setQuery] =  useState('')
    const [isDark] = UseTheme()
    // const [filter,setFilter] = useState('')
  return (
    <main className = {`${isDark ? 'dark' : '' }`}>
    <div className="search-filter-container">
      <SearcBar setQuery = {setQuery}/>
      <SelectMenu setQuery = {setQuery} />
    </div>
   
     <CountriesContainer query = {query}/>
  </main>
  )
}

export default Home