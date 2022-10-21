import styles from "./EmojiPicker.module.scss";

import { useState } from "react";

export default function EmojiPickerSearch({ onSearch }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
    onSearch(e);
  }

  return (
    <input
      type="text"
      onChange={handleChange}
      value={value}
      className={styles.emojiPickerSearch}
      placeholder='Search emojis'
    />
  );
}
