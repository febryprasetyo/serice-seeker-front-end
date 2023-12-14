import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/store/auth';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const { actionLogin, setLoadingLogin, errMsg, loadingLogin, isLogin } =
    useAuth();
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });
  const [errForm, setErrForm] = React.useState();
  const navigate = useNavigate();

  const handleSubmitLogin = () => {
    if (!form.password || !form.username) {
      setErrForm('Pastikan Form Username & Password Terisi');
      return;
    }
    setLoadingLogin(true);
    actionLogin(form);
  };

  React.useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <>
      <div className='absolute inset-0 z-0 h-full w-full bg-black/50' />
      <div className='container mx-auto p-4'>
        <Card className='absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4'>
          <CardHeader
            variant='gradient'
            color='blue'
            className='mb-4 grid h-28 place-items-center'>
            <Typography variant='h3' color='white'>
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className='flex flex-col gap-4'>
            {errForm && (
              <Typography className='text-sm' color='red'>
                {errForm}
              </Typography>
            )}
            {errMsg && (
              <Typography className='text-sm' color='red'>
                {errMsg}
              </Typography>
            )}
            <Input
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              type='text'
              label='username'
              size='lg'
              crossOrigin='anonymous'
            />
            <Input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type='password'
              label='Password'
              size='lg'
              crossOrigin='anonymous'
            />
          </CardBody>
          <CardFooter className='pt-0'>
            <Button
              onClick={handleSubmitLogin}
              disabled={loadingLogin}
              className='bg-blue-gray-900'
              fullWidth>
              Sign In
            </Button>
            <div className='mt-4 text-center'>
              {isLogin ? (
                <p>
                  Sudah punya akun? <Link to='/login'>Login</Link>
                </p>
              ) : (
                <p>
                  Tidak punya akun? <Link to='/signup'>Daftar</Link>
                </p>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Login;
