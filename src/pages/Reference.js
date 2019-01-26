import * as React from 'react'
import { NavLink } from 'react-navi'

export default function Reference() {
  return (
    <div>
      <h1>Referenssi</h1>
      <p>Kopioi linkki ja tutustu!</p>
      <p>https://frontarm.com/learn</p>
      <nav><NavLink href="/">Etusivu</NavLink></nav>
    </div>
  )
}
