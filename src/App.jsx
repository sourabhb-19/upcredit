import { routes } from './routes';
import {useRoutes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';

function App() {
  function RouteLayout({ path }) {
    const element = useRoutes(path);
    return element;
  }
  return (
    <>
      <Suspense fallback={null}>
        <RouteLayout path={routes()} />
      </Suspense>
    </>
  );
}

export default App;
