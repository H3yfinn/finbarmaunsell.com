import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: '#2452c2',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: '-ms-flexbox',
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        maxWidth: 1200,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ paddingTop: '10px', flex: 1, margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Finn
        </Link>
      </h1>
      <h3
        className=''
        style={{
            paddingTop: '20px'
        }}
      >
        <Link
          className='navLink'
          to="/about"
          style={{
            paddingLeft: '20px',
            float: 'right',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
        <Link
          className='navLink'
          to="/resume"
          style={{
            paddingLeft: '20px',
            float: 'right',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Resume
        </Link>
        <Link
          className='navLink'
          to="/books"
          style={{
            paddingLeft: '20px',
            float: 'right',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Bookshelf
        </Link>
      </h3>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Finbar Maunsell"
      meta={[
        { name: 'description', content: 'Personal website' },
        { name: 'keywords', content: 'personal, website, blog' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '20px',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
