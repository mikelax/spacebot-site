import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'

class Privacy extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="/spacebot - Privacy Policy" />
        <HeaderGeneric title="Spacebot Privacy Policy" />
        <div id="main">
          <section id="content" className="main">
            <h2>What Information We May Collect</h2>
            <p>
              We collect and store only the information you voluntarily enter
              and provide to us on this site and through usage of the app.
            </p>
            <h2>How We Use The Information</h2>
            <p>
              That information may be used internally to improve our service. We
              may share your information with trusted service providers in order
              to improve our service, so long as those parties agree to keep the
              information confidential.
            </p>
            <h2>Cookies & Other Technologies</h2>
            <p>
              To enhance your online experience, we use cookies on this site.
              They may be shared anonymously with third-party services to assist
              us in better understanding visitors of the site, in order to
              improve its functionality.
            </p>
            <h2>Disclosure of Information</h2>
            <p>
              We do not otherwise share your personally identifiable information
              with third parties for their direct marketing purposes unless you
              give us your consent. We may, however, share your information with
              trusted service providers in order to improve our service, so long
              as those parties agree to keep the information confidential.
            </p>
            <h2>Privacy Policy Updates</h2>
            <p>
              This policy may be updated from time to time. The updates will be
              posted to this page. Your use of this site and service constitutes
              your continued agreement to this policy.
            </p>
            <p>Date Last Updated: September 3, 2016</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Privacy
