import * as React from 'react'
import { NavLink } from 'react-navi'

export default function About() {
  return (
    <div>
    <article>
    <section>
      <h2>Kootusti</h2>
      <h3> Navi ( https://frontarm.com/navi/ - Async-edellä reititin React:lle. )</h3>
      <p> kokoaa ja käsittelee esim. tämän sovelluksen sivut, SEO ominaisuuksin, luoden sivustokokonaisuuden, koodin osittamisineen, ym !</p>
      <h2>About</h2>
      <p> Navi ( https://frontarm.com/navi/ - An async-first router for React. )</p>
      <p>Read the blog Painless Routing in React with Navi + Now ( https://zeit.co/blog/painless-routing-react-navi-now )</p>
      <p> This route was compiled and handled by Navi, including all the heavy lifting for SEO, creating sitemaps including this page, code-splitting, etc!</p>
    </section>
    </article>
      <nav><NavLink href="/">Etusivu</NavLink></nav>
    </div>
  )
}
