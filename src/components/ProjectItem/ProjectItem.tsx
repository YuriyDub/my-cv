import { v4 } from 'uuid'
import styles from './ProjectItem.module.scss';

type Tool = {
  image: string;
};

type ProjectItemPropsType = {
  image?: string;
  url: string;
  title?: string;
  description?: string;
  stack?: Array<Tool>;
};

export const ProjectItem = (props: ProjectItemPropsType) => {
  const {
    image = './img/photo_2023-07-15_02-28-27.jpg',
    url,
    title = 'Project title',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam nulla alias omnis soluta? Est itaque dolorum officia harum, dolores ab repellendus dignissimos vitae a illum, ullam, aspernatur expedita nulla!',
    stack = [],
  } = props;

  const linkTo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.project}>
      <div className={styles.wrapper}>
        <img src={image} alt="project" onClick={() => linkTo(url)} />
        <ul className={styles.stack}>
          {stack.map((t) => (
            <li key={v4()} className={styles.tool}>
              <img src={t.image} alt="tool" />
            </li>
          ))}
        </ul>
      </div>
      <article>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </div>
  );
};
