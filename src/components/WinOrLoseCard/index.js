// Write your code here.

import './index.css'

const WinOrLooseCard = props => {
  const {TopScore, resetGame, winOrLoose} = props

  const onclickPlayBtn = () => {
    resetGame()
  }

  const WinOrLooseText = winOrLoose ? 'Won' : 'Loose'

  const WinOrLooseImg = winOrLoose
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <>
      <div className="winOrLooseTextContainer">
        <p className="text">You {WinOrLooseText}</p>

        <p className="scoreText">Best Score</p>
        <p className="score">{TopScore}/12</p>

        <button type="button" className="playAgainBtn" onClick={onclickPlayBtn}>
          Play again
        </button>
      </div>
      <img src={WinOrLooseImg} className="img" alt={WinOrLooseText} />
    </>
  )
}

export default WinOrLooseCard
