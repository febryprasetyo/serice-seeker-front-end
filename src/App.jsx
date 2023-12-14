import PropTypes from 'prop-types';
import { Navbar } from '@/components';
import Homepage from '@/page/Homepage';
import Login from '@/page/auth/Login';
import Signup from '@/page/auth/Signup';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '@/store/auth';

function ProtectedSignupRoute({ element }) {
  const { isLogin } = useAuth();

  if (isLogin) {
    return <Navigate to="/" />;
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
          <Route
            path='/login'
            element={<Login />}
          ></Route>
          <Route
            path='/signup'
            element={<ProtectedSignupRoute element={<Signup />} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
