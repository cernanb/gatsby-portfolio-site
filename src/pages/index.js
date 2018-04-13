import React from 'react'
import Link from 'gatsby-link'
import Typewriter from '../components/Typewriter'

const IndexPage = () => (
  <div>
    <h1
      style={{
        paddingTop: '150px',
        textAlign: 'center',
        textShadow: '0.1px 0.1px #fff',
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: '300',
        fontSize: '66px',
      }}
    >
      I'm Cernan Bernardo and I
      <Typewriter />
    </h1>
  </div>
)

export default IndexPage
