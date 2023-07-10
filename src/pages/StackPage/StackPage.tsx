import './index.scss';

const StackPage = () => {
  return (
    <div className="stack-page">
      <div className="stack">
        <div className="tool">
          <img src="./img/icons/4373213_js_logo_logos_icon.svg" alt="tool" />
          <span>JavaScript ES6</span>
        </div>
        <div className="tool">
          <img src="./img/icons/19198039191551953708.svg" alt="tool" />
          <span>TypeScript</span>
        </div>
        <div className="tool">
          <img src="./img/icons/7423888_react_react native_icon.svg" alt="tool" />
          <span>React 18</span>
        </div>
        <div className="tool">
          <img src="./img/icons/4708018331551942292.svg" alt="tool" />
          <span>Redux Toolkit</span>
        </div>
        <div className="tool">
          <img src="./img/icons/react-router.svg" alt="tool" />
          <span>React Router v6</span>
        </div>
      </div>
      <h3 className="background-text">Stack</h3>
    </div>
  );
};

export { StackPage };
