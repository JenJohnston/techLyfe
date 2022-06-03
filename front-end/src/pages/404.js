import * as React from "react"
import { Link } from "gatsby"
import Seo from '../components/Seo'


export default function PageNotFound() {
  

  return (
    <div className="error__container">
      <Seo title="Page Not Found"/>
      <div className="error__content">
        <h2>So... You've found the 404 page eh?</h2>
        <p>No problem, just click on this here link and we'll get you back to the <Link to="/">Home Page</Link>
        </p>
      </div>
    </div>
  )
}

