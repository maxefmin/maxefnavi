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
          <h2>Navi React Projekti</h2>
          <p>Reactin opiskelun parissa pari viime vuotta. Serverless rocks! </p>
          <p>James K Nelson ansaitsee ehdottomasti suurimman kiitoksen ja kunnian tästä React osuudesta. Zeit.co-porukka huikean mahtavasta palvelusta ! </p>
          <p>Big thanks goes to James K Nelson this React part and the team behind Zeit.co, you are just awesome!</p>
          <nav><NavLink href='/about'>Kuvailu sivu</NavLink></nav>
        </div>
    }),

    // Create the about route
    '/about': createPage({
      title: "About",
      getContent: () => import('./About')
    }),
  }
})
