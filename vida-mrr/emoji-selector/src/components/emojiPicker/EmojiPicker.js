import { forwardRef, useEffect, useRef, useState } from "react";
import { data as emojiList } from './data';
import EmojiPickerEmoji from "./EmojiPickerEmoji";
import EmojiPickerSearch from "./EmojiPickerSearch";

import styles from './EmojiPicker.module.scss';

function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);

  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', e => {
      if (!containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setEmojis(emojiList);
      }
    });
  }, []);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  function handleSearch(e) {
    const q = e.target.value.toLowerCase();
    if (!!q) {
      const search = emojiList.filter((emoji) => {
        return emoji.name.includes(q) || emoji.keywords.includes(q);
      });
      setEmojis(search);
    }
    else {
      setEmojis(emojiList);
    }
  }

  function handleClickEmojiButton(emoji) {
    const cursorPosition = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPosition);
    const post = text.slice(cursorPosition);

    inputRef.current.value = prev + emoji.symbol + post;
    inputRef.current.selectionStart = cursorPosition + emoji.symbol.length;
    inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length;
    inputRef.current.focus();
  }

  return (
    <div ref={containerRef} className={styles.inputContainer} >
      <button onClick={handleClickOpen} className={styles.emojiPickerOpenButton}>Open emojis</button>
      {isOpen ?
        <div className={styles.emojiPickerContainer}>
          <EmojiPickerSearch onSearch={handleSearch} />

          <div className={styles.emojiList}>
            {emojis.map(emoji => (
              <EmojiPickerEmoji
                key={emoji.symbol}
                emoji={emoji}
                onClick={handleClickEmojiButton} />
            ))}
          </div>

        </div>
        : ''}
    </div >
  );
}

export default forwardRef(EmojiPicker);