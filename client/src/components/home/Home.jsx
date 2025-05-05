import React from 'react'
import {Link} from 'react-router-dom'

import './contentStyle.css'

import video from '../../../images/sc2video.mp4'

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
                <h1 className="display-5">This app is still in development.</h1>
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
      <div className="container-fluid p-0 w-100 h-100">
        <video className="homeVideo z-0 w-100 h-100" autoPlay loop muted>
          <source src={video}></source>
        </video>
      </div>

    </>

  )
}

export default content