import React, { Suspense } from 'react';
import Loading from '../src/Components/Loader/Loading.jsx';

const Navbar = React.lazy(() => import('../src/Components/Navbar/Navbar.jsx'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
    </Suspense>
  );
}

export default App;
