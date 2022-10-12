import React, { useContext } from 'react';
import ThemeContext from '../context';

function ThemedButton() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <button
      onClick={handleChangeTheme}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Change Theme
    </button>
  );
}

export default ThemedButton;