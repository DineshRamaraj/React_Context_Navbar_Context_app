// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navbarContainer = isDarkTheme ? 'bg-navbar' : ''

      const navbarHeading = isDarkTheme ? 'navbar-item-heading' : ''

      const bgColorChangerImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onClickDarkTheme = () => {
        toggleTheme()
      }

      return (
        <div className={`navbar-container ${navbarContainer}`}>
          <Link to="/" className="navbar-link">
            <img
              src={navbarLogo}
              alt="website logo"
              className="navbar-website-logo"
            />
          </Link>
          <ul className="navbar-list-container">
            <Link to="/" className="navbar-link">
              <li className={`navbar-heading ${navbarHeading}`}>Home</li>
            </Link>
            <Link to="/about" className="navbar-link">
              <li className={`navbar-heading ${navbarHeading}`}>About</li>
            </Link>
          </ul>
          <img
            src={bgColorChangerImage}
            alt="theme"
            className="color-change-image"
            onClick={onClickDarkTheme}
            data-testid="theme"
          />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
