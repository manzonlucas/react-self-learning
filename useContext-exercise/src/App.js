import React, { useState } from 'react';
import Layout from './components/Layout';
import ThemeContext, { themes } from './context';

export default function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    // console.log(theme);
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Layout>
        <div className="App">
          <h1>React Context</h1>
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
}