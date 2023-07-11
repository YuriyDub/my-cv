import { Layout } from './components/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { StackPage } from './pages/StackPage';
import { useThemeContext } from './context/themeContext';

import './styles/App.scss';

export default function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`theme-${theme}`}>
      <div className="background">
        <div className="wrapper">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="stack" element={<StackPage />} />
              <Route path="experience" />
              <Route path="projects" />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
