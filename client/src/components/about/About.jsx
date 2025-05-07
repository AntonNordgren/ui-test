import React from 'react'

import './aboutStyle.css'

import logotype from'../../../images/logotype.png'
import aboutBackground from '../../../images/jim.jpg'

function About() {
  return (  
    <div className="about w-100 h-100 rounded">
      <img className="aboutBackground w-100 vh-100 position-absolute object-fit-cover z-1 opacity-75" src={aboutBackground} />
      <div className="aboutBackgroundContainer w-100 h-100 position-absolute z-0" />
      <div className="container aboutTextContainer d-flex flex-column h-100 p-5 pt-3 z-1 position-relative">
        <img className="mx-auto aboutLogo pb-3" src={logotype} />
        <p className="text-start">
          StarCraft II is a real-time strategy video game created by Blizzard Entertainment, first released in 2010. A sequel to the successful StarCraft, released in 1998, it is set in a militaristic far future. The narrative centers on a galactic struggle for dominance among various races. <br /> <br />
          StarCraft II single-player campaign is split into three installments, each of which focuses on one of the three races: StarCraft II: Wings of Liberty (released in 2010), Heart of the Swarm (2013) and Legacy of the Void (2015). A final campaign pack called StarCraft II: Nova Covert Ops was released in 2016.<br /> <br />
          StarCraft II multi-player gameplay spawned a separate esports competition that later drew interest from companies other than Blizzard, and attracted attention in South Korea and elsewhere, similar to the original StarCraft esports.
          Since 2017, StarCraft II multi-player mode, co-op mode and the first single-player campaign have been free-to-play.
        </p>
      </div>
    </div>
  )
}

export default About