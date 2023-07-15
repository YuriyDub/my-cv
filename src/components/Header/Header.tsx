import { useState } from 'react';
import { Button } from '../UI/Button';
import { NavButton } from '../UI/NavButton';
import { BurgerList } from '../BurgerList';
import { useThemeContext } from '../../context/themeContext';
import { Toggle } from '../UI/Toggle';

import './index.scss';

const Header = () => {
  const [isBurger, setIsBurger] = useState(false);

  const { theme, setTheme } = useThemeContext();

  localStorage.setItem('theme', theme);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    localStorage.setItem('theme', theme);
  };

  return (
    <>
      <div className="header">
        <Button onClick={() => setIsBurger((b) => !b)} className="burger">
          <svg
            version="1.1"
            id="Layer_1_1_"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 16 16">
            <rect width="16" height="2" />
            <rect y="7" width="16" height="2" />
            <rect y="14" width="16" height="2" />
          </svg>
        </Button>
        <h2>Yuriy Dub</h2>
        <nav className="baseNavigation">
          <NavButton to="/about" color="#22A699">
            About
          </NavButton>
          <NavButton to="/stack" color="#F2BE22">
            Stack
          </NavButton>
          <NavButton to="/projects" color="#F29727">
            Projects
          </NavButton>
          <NavButton to="/links" color="#F24C3D">
            Links
          </NavButton>
        </nav>
        <h3>yuriyyuriovich@gmail.com</h3>
        <Toggle onClick={changeTheme} onActive={theme === 'dark'} className={'themeToggle'} />
      </div>
      {isBurger && <BurgerList className="burgerList" callback={() => setIsBurger((b) => !b)} />}
    </>
  );
};

export { Header };
