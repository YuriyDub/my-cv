import { useState, useEffect } from 'react';

import styles from './Toggle.module.scss';

type TogglePropsType = {
  onActive: boolean;
  onClick: () => void;
};

export const Toggle = ({ onClick, onActive }: TogglePropsType) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(onActive);
  }, [onActive]);

  return (
    <button
      onClick={() => {
        onClick();
        setIsActive((prev) => !prev);
      }}
      className={`${styles.body} ${isActive ? styles.active : ''}`}>
      <h3 className={styles.toggle}>{isActive ? '🌑' : '☀️'}</h3>
    </button>
  );
};
