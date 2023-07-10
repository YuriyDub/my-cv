import './index.scss';

type ButtonPropsType = {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonPropsType> = ({ className, onClick, children }) => {
  return (
    <button className={`${className} button`} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
