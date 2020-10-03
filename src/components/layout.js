import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import Footer from './Footer'
import '../assets/scss/main.scss'

class Template extends React.Component {
  state = {
    loading: 'is-loading',
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  static defaultProps = {
    children: null,
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        <Helmet>
          <title>/spacebot - a Slack Bot for exploring space</title>
          <meta
            name="description"
            content="/spacebot - A Slack Bot that helps you learn and explore space. Learn about astronomy, NASA, mars rovers, and more."
          />
          <meta
            property="og:title"
            content="/spacebot - A Slack Bot for exploring space"
          />
          <meta property="og:site_name" content="/spacebot" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://slashspacebot.com/" />
          <meta
            property="og:description"
            content="/spacebot - A Slack Bot that helps you learn and explore space. Learn about astronomy, NASA, mars rovers, and more."
          />
        </Helmet>
        <div className={`body ${this.state.loading}`}>
          <div id="wrapper">
            {children}
            <Footer />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Template
