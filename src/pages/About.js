import * as React from 'react'
import { NavLink } from 'react-navi'

export default function About() {
  return (
    <div>

    <article>
    <section>
      <h2>Esittely</h2>
      <p>Sivusto muotoutumassa! </p>
      <p></p>
      <p></p>
      </section>
      </article>
      <nav><NavLink href="/">Etusivu</NavLink></nav>
      <div >
      <footer>
      <details>
      <summary>Suurimmat kiitokset! </summary>
        <p>React + Navi - James.K.Nelson.</p><p> Hostaus -  team Zeit.co.</p>
      </details>
      </footer>
      </div>
    </div>
  )
}
