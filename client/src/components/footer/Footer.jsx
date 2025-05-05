import React from 'react'

import './footerStyle.css'

import logotype from '../../../images/blizzardLogo.png'

function Footer() {
  return (
    <div className="footer mb-0 shadow">
      <div className="footerImgContainer h-100 w-100">
        <img className="h-100 d-block mx-auto p-4" src={logotype} />
      </div>
    </div>
  )
}

export default Footer