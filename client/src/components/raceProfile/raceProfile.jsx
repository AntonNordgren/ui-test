import React, { useEffect, useState } from 'react'
import { useSearchParams, useLocation, Link } from 'react-router-dom'

import './raceProfile.css'

import terranLogo from '../../../images/terranLogo.png'
import zergLogo from '../../../images/zergLogo.png'
import protossLogo from '../../../images/protossLogo.png'

import terranBackground from '../../../images/terran2.jpg'
import zergBackground from '../../../images/zerg2.jpg'
import protossBackground from '../../../images/protoss.jpg'

import terranExtraImg1 from '../../../images/ghost1.jpg'

function raceProfile() {
  const location = useLocation()
  const [currentRace, setCurrentRace] = useState({})


  const data = [
    {
      race: "Terran",
      text: "The terrans (or humans) are a young species with psionic potential. The terrans of the Koprulu sector descend from the survivors of a disastrous 23rd century colonization mission from Earth by Doran Routhe. Compared to the protoss and zerg, the terrans are highly factionalized and endure frequent wars amongst themselves in addition to the more recent conflicts with their alien neighbors. Nevertheless, terrans stand as one of the three dominant species of the galaxy.",
      background: terranBackground,
      logo: terranLogo,
      extraImages: terranExtraImg1
    },
    {
      race: "Zerg",
      text: "The Zerg Swarm is a terrifying and ruthless amalgamation of biologically advanced, arthropodal aliens. Dedicated to the pursuit of genetic perfection, the zerg relentlessly hunt down and assimilate advanced species across the galaxy, incorporating useful genetic code into their own. They are named the Swarm per their ability to rapidly create strains, and the relentless assaults they employ to overwhelm their foes. Alongside the protoss and terrans, the zerg stand as one of the three dominant species of the Milky Way and are universally feared, hated and hunted as such. The Swarm in itself makes up a third of the power of the Koprulu Sector. The zerg remain in areas of the galaxy outside the Koprulu sector.",
      background: zergBackground,
      logo: zergLogo,
      extraImages: terranExtraImg1
    },
    {
      race: "Protoss",
      text: "The protoss (Khalani for Firstborn) are a sapient humanoid species native to the planet Aiur. Their advanced technology complements and enhances their psionic mastery. The main protoss cultural groups are the Khalai and the Nerazim, who reject the Khala. Other cultural branches include the Taldarim, Purifiers, and the Ihan-rii. Protoss civilization was reunified when the Khalai and Nerazim, sundered since the Discord, were reunited after the devastation of Aiur by the zerg during the Great War. Alongside the zerg and terrans, the protoss stand as one of the three dominant species of the Milky Way. Protoss are not found outside the Koprulu sector.",
      background: protossBackground,
      logo: protossLogo,
      extraImages: terranExtraImg1
    },
  ]

  useEffect(() => {
    const pathName = location.pathname
    const race = pathName.slice(7)

    if (race == "terran") setCurrentRace(data[0])
    if (race == "zerg") setCurrentRace(data[1])
    if (race == "protoss") setCurrentRace(data[2])

      console.log(currentRace)

  }, [])

  return (
    <div className="raceProfile text-white vh-100">

      <img className="raceProfileBackground object-fit-cover
      position-fixed vh-100 w-100 z-0" src={currentRace.background} />

      <div className="raceHeaderContainer d-flex flex-column h-100 z-1">
        <div className="h-25 d-flex z-1">

          <div className="position-relative d-flex flex-row w-100 p-5 justify-content-between container z-1">
            <div className="flex-grow-1 my-auto align-middle">
              <Link to="/races">
                <button className="customButton text-white p-3 rounded shadow border-1" onClick={() => console.log(currentRace)}>Back</button>
              </Link>
            </div>
            <div className="flex-grow-1 my-auto align-middle">
              <h1 className="text-center display-1 m-0 p-0">{currentRace.race}</h1>
            </div>
            <div className="flex-grow-1 d-flex justify-content-end">
              <img className="h-100" src={currentRace.logo} />
            </div>
          </div>
        </div>
        <div className="h-75 position-relative z-1 px-5 container z-1">
          <h3>
            {currentRace.text}
          </h3>
        </div>

        {/* <div className="container-fluid">
          <div className="row">
            {currentRace.extraImages.map(img =>
              <div key={img} className="customCard col-lg mx-lg-3 my-4 m-0 p-0 rounded-3 shadow h-100 w-100">
                <div className="">
                  <img className="cardImage rounded-top-3 object-fit-cover card-img-top" src={img} alt=""></img>
                </div>
                <div className="cardInfo position-relative p-0 m-0 p-3 pt-2">
                  <h1 className="card-title text-center mb-2">{img}</h1>
                  <h6 className="card-text">{img}</h6>
                </div>
              </div>
            )}
          </div>
        </div> */}




      </div>
    </div>
  )
}

export default raceProfile