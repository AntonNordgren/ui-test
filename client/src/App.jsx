import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Races from './components/races/Races'
import RaceProfile from './components/raceProfile/raceProfile'
import Esport from './components/esport/esport'

import './App.css'


function App() {
  return (
    <div className="container-fluid p-0">
      <BrowserRouter>
        <Layout >
          <div className="content flex-grow-1">
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="races">
                <Route index element={<Races />}></Route>
                <Route path=":raceId" element={<RaceProfile />} />
              </Route>
              <Route path="esport" element={<Esport />}></Route>
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
