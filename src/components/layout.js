import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

import Footer from './Footer'
import '../assets/scss/main.scss'

class Template extends React.Component {
  state = {
    loading: 'is-loading'
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
          <meta property="og:image" content="https://raw.githubusercontent.com/mikelax/spacebot-site/master/src/assets/images/website-icon.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:image:alt" content="spacebot logo" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="/spacebot - a Slack Bot for exploring space" />
          <meta name="twitter:description" content="/spacebot - A Slack Bot that helps you learn and explore space. Learn about astronomy, NASA, mars rovers, and more.">
          <meta name="twitter:url" content="https://slashspacebot.com/">
          <meta name="twitter:image" content="https://raw.githubusercontent.com/mikelax/spacebot-site/master/src/assets/images/website-icon.png" />
          <meta name="twitter:image:alt" content="spacebot logo">
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
