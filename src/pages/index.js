// Import dependencies from navi and react
import { createPage, createSwitch } from 'navi'
import * as React from 'react'
import { NavLink } from 'react-navi'

// Create the switch
export default createSwitch({
  paths: {
    // Create the index route
    '/': createPage({
      title: "Navi",
      content:
        <div>
          <h1>Navi</h1>
          <h2>Reititin / lataaja Reactille</h2>
          <p>Oma toteutukseni reitittimestä ja staattisen renderöinnin kirjastosta.</p>
          <p></p>
          <p></p>
          <nav><NavLink href='/reference'>Referenssi</NavLink></nav>
          <nav><NavLink href='/about'>Kuvailu</NavLink></nav>
        </div>
    }),

    // Create the about route
    '/about': createPage({
      title: "About",
      getContent: () => import('./About')
    }),
    // Create the reference route
    '/reference': createPage({
      title: "Reference",
      getContent: () => import('./Reference')
    }),
  }
})
