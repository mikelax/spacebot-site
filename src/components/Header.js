import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = (props) => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Spacebot</h1>
    <p>spacebot - A Slack Bot for exploring NASA images</p>
  </header>
)

export default Header
