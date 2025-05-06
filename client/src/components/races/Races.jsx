import React from 'react'
import { Link } from 'react-router-dom'

import './racesStyle.css'

import terranCardImage from '../../../images/terran.jpg'
import zergCardImage from '../../../images/zerg.jpg'
import protossCardImage from '../../../images/protoss2.jpg'

function Races() {

  const races = [
    {
      name: "Terran",
      text: "The terrans (or humans) are a young species with psionic potential. The terrans of the Koprulu sector descend from the survivors of a disastrous 23rd century colonization mission from Earth by Doran Routhe.",
      img: terranCardImage
    },
    {
      name: "Zerg",
      text: "The Zerg Swarm is a terrifying and ruthless amalgamation of biologically advanced, arthropodal aliens. Dedicated to the pursuit of genetic perfection, the zerg relentlessly hunt down and assimilate advanced species across the galaxy, incorporating useful genetic code into their own.",
      img: zergCardImage
    },
    {
      name: "Protoss",
      text: "The protoss are a sapient humanoid species native to the planet Aiur. Their advanced technology complements and enhances their psionic mastery.",
      img: protossCardImage
    },
  ]

  return (
    <div className="races w-100 h-100 d-flex flex-column container">
      <div className="racesTextContainer m-4">
        <div className="d-flex h-100 w-100">  
          <div className="mx-auto align-middle my-auto text-center">
            <h1 className='display-1'>Races</h1>
            <h4 className="m-0 ">Starcraft 2 has three different races to play as with their own strengths and weaknesses.</h4>
          </div>
        </div>
      </div>
      <div className="racesCardContainer d-flex container-fluid p-5">
        <div className="row m-auto">
          { 
            races.map(race =>
              <div className="customCard col mx-4 m-0 p-0 rounded-3
              shadow d-flex flex-column h-100 w-100">
                <Link to={race.name.toLowerCase()}>
                  <div className="">
                    <img class="cardImage rounded-top-3 object-fit-cover
                    card-img-top" src={race.img} alt="Card image cap"></img>
                  </div>
                  <div className="cardInfo position-relative p-0 m-0 p-3 pt-2">
                    <h1 className="card-title text-center mb-2">{race.name}</h1>
                    <h6 className="card-text">{race.text}</h6>
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Races