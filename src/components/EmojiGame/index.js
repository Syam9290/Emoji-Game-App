/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import './index.css'

import Navbar from '../NavBar/index'

import EmojiCard from '../EmojiCard/index'

import WinOrLooseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {emojiIdList: [], TopScore: '0', isGameProgress: true}

  resetGame = () => {
    this.setState({isGameProgress: true, emojiIdList: []})
  }

  finishGameAndSetTopScore = currentLength => {
    const {TopScore} = this.state

    let newTopScore = TopScore

    if (currentLength > TopScore) {
      newTopScore = currentLength
    }
    this.setState({TopScore: newTopScore, isGameProgress: false})
  }

  onclickEmoji = id => {
    const {emojisList} = this.props
    const {emojiIdList} = this.state

    const isEmojiIdIncludes = emojiIdList.includes(id)

    if (isEmojiIdIncludes) {
      console.log('game over')
      this.finishGameAndSetTopScore(emojiIdList.length)
    } else {
      if (emojiIdList.length === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
        console.log('chnces over')
      }
      this.setState({emojiIdList: [...emojiIdList, id]})
    }
  }

  renderScoreCard = shuffleList => (
    <ul className="emojiCardContainer">
      {shuffleList.map(eachItem => (
        <EmojiCard
          item={eachItem}
          onclickEmoji={this.onclickEmoji}
          key={eachItem.id}
        />
      ))}
    </ul>
  )

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  WinorLooseCard = () => {
    const {emojisList} = this.props
    const {isGameProgress, TopScore, emojiIdList} = this.state

    const winOrLoose = emojisList.length === emojiIdList.length

    return (
      <div className="WinOrLooseContainer">
        <WinOrLooseCard
          isGameProgress={isGameProgress}
          TopScore={TopScore}
          resetGame={this.resetGame}
          winOrLoose={winOrLoose}
        />
      </div>
    )
  }

  render() {
    const {emojiIdList, TopScore, isGameProgress} = this.state
    console.log(emojiIdList)

    // const shuffleList = this.emojiShuffle(emojisList)
    const shuffleList = this.shuffledEmojisList()

    const renderEmojiScoreCard = this.renderScoreCard(shuffleList)

    const renderWinOrLooseCard = this.WinorLooseCard()

    return (
      <>
        <Navbar score={emojiIdList.length} topScore={TopScore} />
        <div className="gameBg">
          {isGameProgress ? renderEmojiScoreCard : renderWinOrLooseCard}
        </div>
      </>
    )
  }
}

export default EmojiGame
