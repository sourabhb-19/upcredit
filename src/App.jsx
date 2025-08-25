import { routes } from './routes';
import { useRoutes, useLocation } from 'react-router-dom';
import './App.css';
import { Suspense, useEffect } from 'react';
import { Loader } from './components';
import titleConfig from './config/title.config';

function App() {
  const location = useLocation();

  
  function RouteLayout({ path }) {
    const element = useRoutes(path);
    return element;
  }

  useEffect(() => {
    const currentPath = location.pathname;
    const pageTitle = titleConfig[currentPath] || "Upcredit"; 
    document.title = `${pageTitle} | Upcredit`;
  }, [location]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouteLayout path={routes()} />
      </Suspense>
    </>
  );
}

export default App;
