import React from 'react'
import Link from 'gatsby-link'
import logo2 from './logo2.png'

const Header = ({ pathname }) => (
  <div>
    <div
      style={{
        textAlign: 'center',
        background: `${pathname === '/' ? '' : '#d2dae2'}`,
        paddingBottom: '25px',
      }}
    >
      <h1 style={{ margin: '0 auto', textAlign: 'center', height: '60px' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{
              marginTop: '-60px',
              marginLeft: '35px',
            }}
            src={logo2}
          />
        </Link>
      </h1>
      <nav
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: '20px',
          marginTop: '20px',
          display: 'inline-block',
        }}
      >
        <Link to="/" style={navLink}>
          Home
        </Link>
        <Link to="/portfolio" style={navLink}>
          Portfolio
        </Link>
        <Link style={navLink}>Contact</Link>
        <Link style={navLink}>Blog</Link>
      </nav>
    </div>
  </div>
)

export default Header

const navLink = {
  color: '#e67e22',
  fontSize: '20px',
  marginLeft: '25px',
  textDecoration: 'none',
  textShadow: '0.1px 0.1px #000',
  fontWeight: '400',
}
