import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import Loader from '@/common/loader';
import PropTypes from 'prop-types';
import { Navbar } from '@/components';
import { Footer } from '@/components';
import Homepage from '@/page/Homepage';
import LayoutDashboard from './layout/LayoutDashboard';
import Dashboard from './page/dashboard/Dashboard';
// import { JobDetail, JobPage } from '@/page/job';
import Login from '@/page/auth/Login';
import Signup from '@/page/auth/Signup';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '@/store/auth';
import routes from '@/routes/routes';
import { JobPage } from './page/job';

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
  const [loading, setLoading] = useState('true');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          {/* <Route path='/*' element={<Homepage />}></Route> */}
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>

          {/* route */}
          {/* <Route path='/dashboard' element={<LayoutDashboard />}>
            <Route index element={<Dashboard />} />
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
          </Route> */}

          <Route path='/jobs' element={<JobPage />}></Route>

          {/* auth */}
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
