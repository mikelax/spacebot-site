import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'

class Support extends React.Component {
  render() {
    return <Layout>
        <Helmet title="/spacebot - Support" />
        <HeaderGeneric title="Spacebot Support" />
        <div id="main">
          <section id="content" className="main">
            <h2>We want to hear from you</h2>
            <p>
              Please use the form below to send us your feedback. We want to
              hear about your suggestions, bug reports, and anything else
              you want to share.
            </p>
            <p>
              If you are submitting a bug report, please include the full
              command you used to produce the error.
            </p>
            <p>
              You can view a full list of commands and usage instructions on the <Link to="/">
                main page
              </Link>.
            </p>

            <div id="contact-form">
              <form id="contact" method="post" action="https://api.slashspacebot.com/prod/contact">
                <fieldset>
                  <label for="name">Name</label>
                  <input type="text" name="name" required placeholder="Name" />

                  <br />
                  <label for="email">E-mail</label>
                  <input type="email" name="email" required placeholder="E-mail" />

                  <br />
                  <label for="slackteam">Slack Team (optional)</label>
                  <input type="text" name="slackteam" placeholder="Slack Team Name or URL" />

                  <br />
                  <label for="message">Comments</label>
                  <textarea name="message" />

                  <input type="submit" class="btn" name="submit" id="submit" value="Send Message" />
                </fieldset>
              </form>
            </div>
          </section>
        </div>
      </Layout>
  }
}

export default Support
