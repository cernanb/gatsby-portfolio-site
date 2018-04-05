import React from 'react'
import Link from 'gatsby-link'
import logo2 from './logo2.png'

const Header = () => (
  <div>
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <h1 style={{ margin: 0 }}>
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
        <nav
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '20px',
            float: 'right',
            marginTop: '26px',
            marginRight: '60px',
          }}
        >
          <Link to="/" style={navLink}>
            Home
          </Link>
          <Link to="/page-2" style={navLink}>
            Portfolio
          </Link>
          <Link style={navLink}>Portfolio</Link>
        </nav>
      </h1>
    </div>
  </div>
)

export default Header

const navLink = {
  color: 'white',
  fontSize: '20px',
  marginLeft: '25px',
  textDecoration: 'none',
  fontWeight: '400',
}
