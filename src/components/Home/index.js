// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeBackground = isDarkTheme ? 'isDarkBackground' : ''
      const homeHeading = isDarkTheme ? 'isDarkHeading' : ''

      const theme = isDarkTheme ? 'dark' : ''

      return (
        <>
          <Navbar />
          <div className={`home-container ${homeBackground}`}>
            <img
              src={homeImageUrl}
              alt={`home ${theme}`}
              className="home-image"
            />
            <h1 className={`home-heading ${homeHeading}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
