import { useThemeContext } from '../../context/themeContext';
import { NavButton } from '../UI/NavButton';
import { Toggle } from '../UI/Toggle';
import './index.scss';

type BurgerListPropsType = {
  className: string;
  callback?: () => void;
};

const BurgerList = ({ className, callback }: BurgerListPropsType) => {
  const { theme, setTheme } = useThemeContext();

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={className}>
      <div className="popup-background" onClick={callback}>
        <div
          className="popup"
          onClick={(event: React.MouseEvent<HTMLElement>) => event.stopPropagation()}>
          <h1>Sections</h1>
          <nav className="navigation">
            <NavButton to="/about" color="#22A699" callback={callback}>
              About
            </NavButton>
            <NavButton to="/stack" color="#F2BE22" callback={callback}>
              Stack
            </NavButton>
            <NavButton to="/experience" color="#F29727" callback={callback}>
              Experience
            </NavButton>
            <NavButton to="/projects" color="#F24C3D" callback={callback}>
              Projects
            </NavButton>
          </nav>
          <h3 className="themeToggle">
            theme:
            <Toggle onClick={changeTheme} onActive={theme === 'dark'} />
          </h3>
        </div>
      </div>
    </div>
  );
};

export { BurgerList };
