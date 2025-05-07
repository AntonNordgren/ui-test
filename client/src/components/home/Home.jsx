import React from 'react'
import {Link} from 'react-router-dom'

import './contentStyle.css'

import video from '../../../images/sc2video.mp4'

function content() {
  return (
    <>
      <div className="videoContainer container-fluid position-absolute m-0 p-0 w-100 vh-100">
        <video className="homeVideo z-0 w-100 h-100" autoPlay loop muted>
          <source src={video}></source>
        </video>
      </div>
      <div className="homeVideoTextContainer h-100 d-flex
      flex-column text-center w-100 position-absolute">
        <div className="d-flex flex-column h-100">
          <div className="h-50">
            <div className="d-flex w-100 h-100">
              <div className='m-auto'>
                <h1 className="display-5 m-0">Starcraft 2 is a realtime strategy game developed by</h1>
                <h1 className="display-5 m-0">Blizzard Entertainment</h1>
                <h1 className="display-5 m-0">This app is still in development.</h1>
              </div>
            </div>
          </div>
          <div className="h-50 align-middle">
            <div className="d-flex h-100 w-100 m-0">
              <Link className="m-auto" to="about">
                <button className="customButton btn btn-primary
                p-3 rounded-3 shadow-lg m-auto">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default content