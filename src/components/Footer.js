import React from 'react'
import { Link } from 'gatsby'
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Built by Michael Holtzman</h2>
      <p>
        This website and the spacebot Slack bot was built and maintained by{' '}
        <a href="https://github.com/mikelax">Michael Holtzman</a>. The bot and
        website are open source, please feel free to{' '}
        <a href="https://github.com/mikelax/spacebot/issues">
          submit new features
        </a>{' '}
        or submit a PR for a bugfix or enhancement.
      </p>
    </section>
    <section>
      <h2>Contact Me</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          &#109;&#104;&#111;&#108;&#116;&#122;&#109;&#097;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="https://twitter.com/mikelax" className="bottom-none">
          <IconContext.Provider value={{ className: "icon alt" }}>
            <FaTwitter><span className="label">Twitter</span></FaTwitter>
          </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mikelax/" className="bottom-none"
          >
          <IconContext.Provider value={{ className: "icon alt" }}>
            <FaInstagram><span className="label">Instagram</span></FaInstagram>
          </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="https://github.com/mikelax" className="bottom-none">
          <IconContext.Provider value={{ className: "icon alt" }}>
            <FaGithub><span className="label">Github</span></FaGithub>
          </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mholtzman/" className="bottom-none"
          >
          <IconContext.Provider value={{ className: "icon alt" }}>
            <FaLinkedinIn><span className="label">LinkedIn</span></FaLinkedinIn>
          </IconContext.Provider>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      <Link to="/">Home</Link> | <Link to="/support">Support</Link> |{' '}
      <Link to="/privacy">Privacy Policy</Link> |{' '}
      <a
        href="https://github.com/mikelax/spacebot"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <br />
      Built & maintained by Michael Holtzman{' '}
      <a
        href="https://twitter.com/mikelax"
        target="_blank"
        rel="noopener noreferrer"
      >
        @mikelax
      </a>
      <br />
      &copy; 2018, Michael Holtzman
    </p>
  </footer>
)

export default Footer
