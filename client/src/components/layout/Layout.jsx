import React from 'react'

import './layoutStyle.css'

import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <div className="layout p-0 d-flex flex-column vh-100 w-100">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default Layout