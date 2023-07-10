import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

import styles from './NavButton.module.scss';

type NavButtonPropsType = {
  to: string;
  children: React.ReactNode;
  callback?: () => void;
  color?: string;
};

const NavButton: React.FC<NavButtonPropsType> = ({ to, children, color = '#fff', callback }) => {
  const match = useMatch(to);

  return (
    <Link to={to} className={`${styles.navButton} navButton`}>
      <button
        onClick={callback}
        style={{ background: color }}
        className={match ? `${styles.active} active` : undefined}>
        {children}
      </button>
    </Link>
  );
};

export { NavButton };
