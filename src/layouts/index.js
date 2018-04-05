import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import hero from './hero.jpg'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children, location: { pathname } }) => {
  const backgroundImage = pathname === '/' ? `url(${hero})` : ''
  return (
    <div
      style={{
        margin: 0,
        backgroundImage,
        backgroundColor: 'lightgrey',
        backgroundPosition: 'center center',
        opacity: 0.8,
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <Helmet
        title="Cernan Bernardo"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
