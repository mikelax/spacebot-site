import React from 'react'
import { Waypoint } from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import curiosityImage from '../assets/images/curiosity-profile.jpeg'

import { FaRocket, FaHandPointUp } from 'react-icons/fa'
import { IconContext } from 'react-icons'

class Index extends React.Component {
  state = {
    stickyNav: false,
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Introduction</h2>
                </header>
                <p>
                  Spacebot is a Slack bot that you can interact with to view
                  images and information about space. It makes use of
                  information from NASA including their ever popular Astronomy
                  Picture of the Day and mars rovers data.
                </p>
                <p>
                  spacebot adds a new <code>/spacebot</code> slash command to
                  your slack channels to allow you to easily see new and
                  interesting images about space, astronomy, mars, and more. See
                  the usage section below for details on the lists of available
                  commands.
                </p>
                <p>
                  NASA currently has two rovers that are exploring the surface
                  of Mars, Curiosity and Opportunity. Opportunity was launched
                  in 2003, while Curiosity was launched in 2011. Spirit was also
                  launched as the second rover of the pair in 2003 but became
                  disabled and ultimately decommissioned in 2011.
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://whosay.slack.com/apps/A267XPPFT-spacebot"
                      className="button"
                    >
                      View in App Directory
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={curiosityImage} alt="Curiosity Rover Profile" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Install to Slack</h2>
            </header>
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
            <ul className="features">
              <IconContext.Provider value={{ className: 'icon major style1' }}>
                <li>
                  <FaHandPointUp />
                  <h3>Click the Add Button</h3>
                  <p>One click process to install to your Slack Account.</p>
                </li>
              </IconContext.Provider>
              <IconContext.Provider value={{ className: 'icon major style5' }}>
                <li>
                  <FaRocket />
                  <h3>Success!!</h3>
                  <p>
                    Type the slash command <code>/spacebot help</code> to get
                    started.
                  </p>
                </li>
              </IconContext.Provider>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a
                    href="https://get.slack.help/hc/en-us/articles/202035138-Add-an-app-to-your-workspace"
                    className="button"
                  >
                    Read More on Slack Apps
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Usage & Commands</h2>
              <p>
                After installing spacebot, there are several "slash" commands
                spacebot understands. Check back as more commands will be added,
                or run <code>/spacebot help</code> within slack.
              </p>
            </header>
            <h3>APOD</h3>
            <p>
              The{' '}
              <a href="http://apod.nasa.gov/apod/astropix.html">
                Astronomy Picture of the Day
              </a>{' '}
              is one of NASA's most popular websites. Each day a different image
              highlighting our universe with a brief description will be
              featured.
            </p>
            <header className="major">
              <code>/spacebot apod</code> Display today's APOD image
              <br />
              <code>/spacebot random</code> Display a random APOD image from
              anytime
              <br />
              <code>/spacebot apod date</code> Display the APOD image for the
              given date. The format for date is <pre>YYYY-MM-DD</pre>
            </header>

            <h3>Mars Rovers Photos</h3>
            <p className="content">
              The rovers sub-command returns data and images from the three
              recent Mars Exploration Rovers (MER). Spirit and Opportunity were
              launched in mid 2003 as a pair to explore opposite sides of Mars.
              Curiosity is a more recent rover launched in 2011. You can read
              more about the upcoming{' '}
              <a href="https://mars.nasa.gov/mars2020/mission/rover/">
                Mars 2020 Rover
              </a>
              , currently being developed by NASA.
            </p>
            <header className="major">
              <code>/spacebot rovers help</code>
              Display the rovers sub-command help
              <br />
              <code>/spacebot rovers info</code>
              Display information about the three rovers with links for even
              more information.
              <br />
              <code>/spacebot rovers cameras list</code>
              Display the list of onboard cameras. Theses can be used to filter
              the images. You can also use a value of 'all' to get images from
              all cameras.
              <br />
              <code>/spacebot rovers photos</code>
              This will display the most recent images from the{' '}
              <strong>Curiosity</strong> Mars rover. It will include a mix of
              photos from all available cameras.
              <br />
              <code>/spacebot rovers photos name camera date</code>
              Display a list of images from the given rover/camera/date
              combination. One or more parameters can be omitted and appropriate
              defaults will be used. Please note that images may not be
              available for a given rover/camera/date combination.
            </header>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Sound good? Install & get exploring</h2>
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
                <span role="img" aria-label="Rocket">
                  🚀
                </span>{' '}
                Install spacebot now and start finding your favorite Mars and
                space photos now.
              </p>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
