import React from 'react'
import Link from 'gatsby-link'
import Typewriter from '../components/Typewriter'

const IndexPage = () => (
  <div>
    <h1
      style={{
        color: 'white',
        paddingTop: '150px',
        textAlign: 'center',
        textShadow: '1px 0.5px #aaa',
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: '300',
      }}
    >
      I'm Cernan Bernardo and I
      <Typewriter />
    </h1>
  </div>
)

export default IndexPage
