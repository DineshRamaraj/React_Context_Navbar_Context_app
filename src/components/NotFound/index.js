// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const notFoundBackground = isDarkTheme ? 'bg-not-found-container' : ' '

        const notFoundHeading = isDarkTheme ? 'not-found-heading' : ''

        const notFoundDescription = isDarkTheme ? 'not-found-description' : ''

        return (
          <div className={`not-found-container ${notFoundBackground}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-title ${notFoundHeading}`}>
              Lost Your Way?
            </h1>
            <p className={`${notFoundDescription} not-found-para`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default NotFound
