import EmojiPicker from "./EmojiPicker";
import { useRef } from "react";

import styles from './EmojiPicker.module.scss';

export default function MainInput() {
  const refInput = useRef(null);

  return (
    <div className={styles.mainInputContainer}>
      <h1>Emoji picker</h1>
      <h2>Features:</h2>
      <ul>
        <li>Filter emojis by keywords</li>
        <li>Keeps cursor on its place when an emoji is clicked</li>
        <li>Auto-closing emojipicker when clicking anywhere</li>
      </ul>
      <input ref={refInput} type="text" />
      <EmojiPicker ref={refInput} />
    </div>
  )
}