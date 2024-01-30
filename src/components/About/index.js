// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutBackground = isDarkTheme ? 'isDarkBackground' : ''
      const aboutHeading = isDarkTheme ? 'isDarkHeading' : ''

      const theme = isDarkTheme ? 'Dark' : ''
      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutBackground}`}>
            <img
              src={aboutImageUrl}
              alt={`about ${theme}`}
              className="about-image"
            />
            <h1 className={`about-heading ${aboutHeading}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
