// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {item, onclickEmoji} = props
  const {emojiUrl, emojiName, id} = item

  const onclickEmojiBtn = () => {
    onclickEmoji(id)
  }

  return (
    <li className="emojiConatiner">
      <button className="emojiBtn" onClick={onclickEmojiBtn} type="button">
        <img src={emojiUrl} className="emojiImg" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
