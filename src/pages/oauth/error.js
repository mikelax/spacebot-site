import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import HeaderGeneric from '../../components/HeaderGeneric'

class Error extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="/spacebot - Installation Failure" />
        <HeaderGeneric title="Spacebot Installation Failure" />
        <div id="main">
          <section id="content" className="main">
            <h2>...running diagnostics check</h2>
            <div class="slack">
              <a href="https://slack.com/oauth/authorize?scope=commands&client_id=8804364867.74269805537">
                <img
                  alt="Add to Slack"
                  height="40"
                  width="139"
                  src="https://platform.slack-edge.com/img/add_to_slack.png"
                  srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                />
              </a>
            </div>
            <p>
              There was a problem setting up spacebot. The most likely cause was
              due to canceling the install process.
            </p>
            <p>
              Click the "Add to Slack" button above to try again. You can also
              see the <Link to="/">usage instructions </Link> for a list of
              commands and things to explore.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Error
