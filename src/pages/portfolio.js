import React from 'react'
import Link from 'gatsby-link'
import '../layouts/portfolio/Projects-Horizontal.css'
import goodEats from './images/good-eats.png'

const Portfolio = () => (
  <div>
    <h1 className="text-center">My Work</h1>
    <div className="projects-horizontal">
      <div className="container">
        <div className="intro">
          <p className="text-center">See my projects below</p>
        </div>
        <div className="row projects">
          <div className="col-sm-12 item">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <a href="#">
                  <img className="img-fluid" src={`${goodEats}`} />
                </a>
              </div>
              <div className="col" style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '24px' }} className="name">
                  Project Name
                </h1>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 item">
            <div className="row">
              <div className="col" style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '24px' }} className="name">
                  Project Name
                </h1>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida.
                </p>
              </div>
              <div className="col-md-12 col-lg-6">
                <a href="#">
                  <img className="img-fluid" src={`${goodEats}`} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 item">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <a href="#">
                  <img className="img-fluid" src={`${goodEats}`} />
                </a>
              </div>
              <div className="col" style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '24px' }} className="name">
                  Project Name
                </h1>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
