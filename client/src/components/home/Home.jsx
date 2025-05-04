import React from 'react'
import {Link} from 'react-router-dom'

import './contentStyle.css'

function content() {
  return (
    <>
      <div className="homeVideoTextContainer h-100 d-flex
      flex-column p-3 text-center w-100 position-absolute">
        <div className="d-flex flex-column h-100">
          <div className="h-50">
            <div className="d-flex w-100 h-100">
              <div className='m-auto'>
                <h1 className="display-5">Starcraft 2 is a realtime strategy game developed by</h1>
                <h1 className="display-5">Blizzard Entertainment</h1>
              </div>
            </div>
          </div>
          <div className="h-50 align-middle">
            <div className="d-flex h-100 w-100">
              <Link className="m-auto" to="about">
                <button className="customButton btn btn-primary
                p-3 rounded-3 shadow-lg m-auto">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <video className="homeVideo w-100 h-100 z-0" autoPlay loop muted>
        <source src="../images/sc2video.mp4"></source>
      </video>
    </>

  )
}

export default content