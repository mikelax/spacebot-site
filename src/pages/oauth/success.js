import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import HeaderGeneric from '../../components/HeaderGeneric'

class Success extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="/spacebot - Installation Success" />
        <HeaderGeneric title="Spacebot Successfully Installed" />
        <div id="main">
          <section id="content" className="main">
            <h2>All Systems Go... And We Have a Launch!</h2>
            <p>
              <span role="img" aria-label="Rocket">
                🚀
              </span>{' '}
              spacebot is configured and awaiting your commands.
            </p>
            <p>
              Please see the <Link to="/">usage instructions</Link> for a list
              of commands and things to explore.
            </p>
            <p>
              Try <code>/spacebot apod random</code> to jump right in and get
              started!
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Success
