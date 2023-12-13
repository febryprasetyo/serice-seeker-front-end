import { Navbar } from '@/components';
import Homepage from '@/page/Homepage';
import Login from '@/page/auth/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '@/page/auth/Signin';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path='/' element={<Signin />}></Route>
          {/* <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
