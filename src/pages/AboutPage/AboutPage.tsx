import './index.scss';

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <div className="about">
          <h1>
            Hello, my name is Yuriy
            <br />
            and I am a Junior Frontend Developer.
          </h1>
          <h2>
            before web development, I was engaged in game development on Unity, and for the last
            year I have been developing on React
          </h2>
        </div>
        <div className="image-border">
          <img src="./img/personal.jpg" alt="personal" />
        </div>
      </div>
      <h1 className={'about-background-text'}> About</h1>
    </>
  );
};

export { AboutPage };
