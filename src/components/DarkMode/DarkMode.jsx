import React, { useState } from 'react';
import { BsSunFill, BsSun } from 'react-icons/bs';
import { DarkModeButton } from './style';

const DarkMode = () => {
  const [content, setContent] = useState([<BsSunFill />]);

  let clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark';
  let theme;

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = e => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      setContent(<BsSun />);
    } else {
      theme = lightTheme;
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'dark');
      theme = darkTheme;
      setContent(<BsSunFill />);
    }
  };

  return (
    <DarkModeButton
      className={theme === 'dark' ? clickedClass : ''}
      onClick={e => switchTheme(e)}
    >
      {content}
    </DarkModeButton>
  );
};

export default DarkMode;
