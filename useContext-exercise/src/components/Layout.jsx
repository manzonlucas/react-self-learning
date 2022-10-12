import React, { useContext } from 'react';
import ThemedButton from './ThemedButton';
import ThemeContext from '../context';

function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div
      id="Layout"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <header>
        <nav>
          <p>Inicio</p>
          <ThemedButton />
        </nav>
      </header>
      {children}
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Layout;