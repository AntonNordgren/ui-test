import React from 'react'

import './headerStyle.css'
import { Link } from 'react-router-dom'

import logotype from '../../../images/logotype.png'

function Header() {

  const headerOptions = ["About", "Races"]

  return (
    <div className="header d-flex p-3 shadow mt-0">
      <div className="">
        <Link to="/">
          <img className="headerLogoImg h-100" src={logotype} />
        </Link>
      </div>
      <div className="optionlistContainer d-flex h-100">
        {headerOptions.map(option =>
        <div className="headerOption my-auto mx-2 align-middle" key={option}>
          <Link to={option.toLowerCase()}>
            <h3 className="m-0">{option}</h3>
          </Link>
        </div>)}
      </div>
    </div>
  )
}

export default Header