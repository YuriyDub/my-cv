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
          description="Welcome to our informative website that allows you to explore the unique characteristics of countries around the world. From population and capital cities to languages spoken, delve into an array of parameters that define each nation."
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
          image="./img/photo_2023-10-12_15-00-11.jpg"
          url="https://typer-speed.vercel.app/"
          title="TypeSpeed App"
          description="Typer Speed is the ultimate app for anyone looking to boost their typing skills. Whether you're a student aiming for faster assignments, a professional seeking improved productivity, or simply looking to impress with your lightning-fast messages, Typer Speed has you covered. With engaging exercises and interactive lessons, you can level up your typing speed and accuracy."
          stack={[
            { image: './logo192.png' },
            { image: './img/icons/4373213_js_logo_logos_icon.svg' },

            { image: './img/icons/file-type-sass.svg' },
            {
              image: './img/icons/react-router.svg',
            },
          ]}
        />
        <ProjectItem
          image="./img/photo_2023-10-12_15-07-02.jpg"
          url="https://typer-speed.vercel.app/"
          title="RatingComparer App"
          description="Introducing Student Rating Comparator, the ultimate program designed to help you assess and compare your academic experience with your peers. Whether you're a current student looking to gauge your performance or an alum reflecting on your time at university, this program empowers you to input your ratings and criteria to generate a personalized academic rating."
          stack={[
            { image: './logo192.png' },
            { image: 'https://cdn.worldvectorlogo.com/logos/redux.svg' },
            { image: './img/icons/4373213_js_logo_logos_icon.svg' },
            { image: 'https://react-hook-form.com/images/logo/react-hook-form-logo-only.png' },
            {
              image:
                'https://i0.wp.com/watermargin.net/wp-content/uploads/2022/05/mui-logo.png?fit=820%2C820&ssl=1',
            },
            { image: './img/icons/file-type-sass.svg' },
            {
              image: './img/icons/react-router.svg',
            },
          ]}
        />
      </div>
      <h3 className={styles.backgroundText}>projects</h3>
    </div>
  );
};
