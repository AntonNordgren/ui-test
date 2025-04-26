import React from 'react'

import './headerStyle.css'

function Header() {

  const headerOptions = ["About", "Races", "Units", "Lore"]

  return (
    <div className="header d-flex p-3">
      <div className="headerLogoContainer">
        <img className="headerLogoImg h-100" src="../images/logotype.png" />
      </div>
      <div className="optionlistContainer d-flex h-100">
        {headerOptions.map(option =>
        <div className="headerOption my-auto mx-2 align-middle">
          <h3 className="m-0">{option}</h3>
        </div>)}
      </div>
    </div>
  )
}

export default Header