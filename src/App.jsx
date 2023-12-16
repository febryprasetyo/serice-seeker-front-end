import { Suspense } from 'react';
import Loader from '@/common/loader';
import PropTypes from 'prop-types';
import { Navbar } from '@/components';
import { Footer } from '@/components';
import Homepage from '@/page/Homepage';
// import { JobDetail, JobPage } from '@/page/job';
import Login from '@/page/auth/Login';
import Signup from '@/page/auth/Signup';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '@/store/auth';
import routes from '@/routes/routes';

function ProtectedSignupRoute({ element }) {
  const { isLogin } = useAuth();

  if (isLogin) {
    return <Navigate to='/' />;
  }

  return element;
}

ProtectedSignupRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>

          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
          <Route path='/login' element={<Login />}></Route>
          <Route
            path='/signup'
            element={<ProtectedSignupRoute element={<Signup />} />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
