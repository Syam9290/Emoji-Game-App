// Write your code here.

import './index.css'

const Navbar = props => {
  const {score, topScore} = props
  return (
    <div className="navBarContainer">
      <div className="logoSection">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h3 className="logoName">Emoji Game</h3>
      </div>
      <div className="scoreContainer">
        <h3>Score:{score} </h3>
        <h3>Top Score: {topScore}</h3>
      </div>
    </div>
  )
}

export default Navbar
