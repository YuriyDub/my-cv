import { ProjectItem } from '../../components/ProjectItem';
import styles from './ProjectsPage.module.scss';

export const ProjectPage = () => {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.projects}>
        <ProjectItem
          image="./img/photo_2023-07-15_02-28-27.jpg"
          url="https://countries-app-yuriydub.vercel.app/"
          title="Countries App"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in nam obcaecati harum
			 voluptatem sit, sint sed dolores odio? Ratione sequi hic nam eos unde ipsa accusamus,
			 expedita nostrum placeat."
          stack={[
            { image: './logo192.png' },
            { image: './img/icons/4373213_js_logo_logos_icon.svg' },
            {
              image: 'https://avatars.githubusercontent.com/u/20658825?s=200&v=4',
            },
            { image: './img/icons/file-type-sass.svg' },
            {
              image: './img/icons/react-router.svg',
            },
            {
              image:
                'https://user-images.githubusercontent.com/43313420/105893220-1bae8780-6013-11eb-87be-eeac845ecc6f.png',
            },
          ]}
        />
        <ProjectItem
          url="https://countries-app-yuriydub.vercel.app/"
          stack={[
            { image: './logo192.png' },
            { image: './img/icons/4373213_js_logo_logos_icon.svg' },
            {
              image: 'https://avatars.githubusercontent.com/u/20658825?s=200&v=4',
            },
            { image: './img/icons/file-type-sass.svg' },
            {
              image:
                'https://user-images.githubusercontent.com/43313420/105893220-1bae8780-6013-11eb-87be-eeac845ecc6f.png',
            },
          ]}
        />
        <ProjectItem
          url="https://countries-app-yuriydub.vercel.app/"
          stack={[
            { image: './logo192.png' },
            { image: './img/icons/4373213_js_logo_logos_icon.svg' },
            {
              image: 'https://avatars.githubusercontent.com/u/20658825?s=200&v=4',
            },
            { image: './img/icons/file-type-sass.svg' },
            {
              image:
                'https://user-images.githubusercontent.com/43313420/105893220-1bae8780-6013-11eb-87be-eeac845ecc6f.png',
            },
          ]}
        />
        <ProjectItem
          url="https://countries-app-yuriydub.vercel.app/"
          stack={[
            { image: './logo192.png' },
            { image: './img/icons/4373213_js_logo_logos_icon.svg' },
            {
              image: 'https://avatars.githubusercontent.com/u/20658825?s=200&v=4',
            },
            { image: './img/icons/file-type-sass.svg' },
            {
              image:
                'https://user-images.githubusercontent.com/43313420/105893220-1bae8780-6013-11eb-87be-eeac845ecc6f.png',
            },
          ]}
        />
      </div>
      <h3 className={styles.backgroundText}>projects</h3>
    </div>
  );
};
