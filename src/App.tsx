import { Routes, Route, Navigate } from 'react-router-dom';
import { useThemeContext } from './context/themeContext';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { StackPage } from './pages/StackPage';
import { ProjectPage } from './pages/ProjectsPage';

import './styles/App.scss';

export default function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`theme-${theme}`}>
      <div className="wrapper">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="stack" element={<StackPage />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="links" />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
