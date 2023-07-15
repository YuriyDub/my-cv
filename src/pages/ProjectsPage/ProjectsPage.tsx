import './index.scss';

export const ProjectPage = () => {
  const linkTo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="projects-page">
      <div className="projects">
        <div className="project">
          <img
            src="./img/photo_2023-07-15_02-28-27.jpg"
            alt="project"
            onClick={() => linkTo('https://countries-app-yuriydub.vercel.app/')}
          />
          <article>
            <h3>Countries App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in nam obcaecati harum
              voluptatem sit, sint sed dolores odio? Ratione sequi hic nam eos unde ipsa accusamus,
              expedita nostrum placeat.
            </p>
          </article>
        </div>
        <div className="project">
          <img src="./img/photo_2023-07-15_02-28-27.jpg" alt="project" />
          <article>
            <h3>Countries App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in nam obcaecati harum
              voluptatem sit, sint sed dolores odio? Ratione sequi hic nam eos unde ipsa accusamus,
              expedita nostrum placeat.
            </p>
          </article>
        </div>
        <div className="project">
          <img src="./img/photo_2023-07-15_02-28-27.jpg" alt="project" />
          <article>
            <h3>Countries App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in nam obcaecati harum
              voluptatem sit, sint sed dolores odio? Ratione sequi hic nam eos unde ipsa accusamus,
              expedita nostrum placeat.
            </p>
          </article>
        </div>
        <div className="project">
          <img src="./img/photo_2023-07-15_02-28-27.jpg" alt="project" />
          <article>
            <h3>Countries App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in nam obcaecati harum
              voluptatem sit, sint sed dolores odio? Ratione sequi hic nam eos unde ipsa accusamus,
              expedita nostrum placeat.
            </p>
          </article>
        </div>
        <div className="project">
          <img src="./img/photo_2023-07-15_02-28-27.jpg" alt="project" />
          <article>
            <h3>Countries App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in nam obcaecati harum
              voluptatem sit, sint sed dolores odio? Ratione sequi hic nam eos unde ipsa accusamus,
              expedita nostrum placeat.
            </p>
          </article>
        </div>
      </div>
      <h3 className="background-text">projects</h3>
    </div>
  );
};
