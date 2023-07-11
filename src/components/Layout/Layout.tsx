import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../Header';
import { useEffect } from 'react';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => navigate('/about'), [navigate]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
