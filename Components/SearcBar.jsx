import React from 'react'

function SearcBar({setQuery}) {
  return (
    <div>
         <div className="search-container">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input onChange = {(e) => setQuery(e.target.value.toLowerCase())} type="text" placeholder="search here"/>
            </div>
    </div>
  )
}

export default SearcBar