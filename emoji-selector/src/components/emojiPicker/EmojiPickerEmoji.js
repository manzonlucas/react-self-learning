import styles from './EmojiPicker.module.scss';

export default function EmojiPickerEmoji({ emoji, onClick }) {

  function handleClick() {
    onClick(emoji)
  }

  return (
    <button onClick={handleClick} className={styles.emojiPickerEmoji}>{emoji.symbol}</button>
  )
}