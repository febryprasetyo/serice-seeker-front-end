/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
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
  Tabs,
  Tab,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export function Signup() {
  const { actionSignup, setLoadingSignup, errMsg, loadingSignup, isSignup, isLogin } =
    useAuth();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      province: '',
    },
    role: 'employer', // Default role
    password: '',
  });
  const [errForm, setErrForm] = useState();
  const navigate = useNavigate();

  const handleSubmitSignup = () => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.username ||
      !form.email ||
      !form.phone ||
      !form.password
    ) {
      setErrForm('Pastikan semua kolom terisi');
      return;
    }
    setLoadingSignup(true);

    const fullAddress = `${form.address.street} ${form.address.city} ${form.address.province}`;

    const updatedForm = { ...form, address: fullAddress };

    actionSignup(updatedForm);
  };

  useEffect(() => {
    if (isSignup) {
      navigate('/login');
    }
  }, [isSignup, navigate]);

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
              Signup
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
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
              type='text'
              label='First Name'
              size='lg'
            />
            <Input
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
              type='text'
              label='Last Name'
              size='lg'
            />
            <Input
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
              type='text'
              label='Username'
              size='lg'
            />
            <Input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type='email'
              label='Email'
              size='lg'
            />
            <Input
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              type='text'
              label='Phone'
              size='lg'
            />
            <Input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type='password'
              label='Password'
              size='lg'
            />

            {/* Address Fields */}
            <Input
              onChange={(e) =>
                setForm({
                  ...form,
                  address: { ...form.address, street: e.target.value },
                })
              }
              type='text'
              label='Street'
              size='lg'
            />
            <Input
              onChange={(e) =>
                setForm({
                  ...form,
                  address: { ...form.address, city: e.target.value },
                })
              }
              type='text'
              label='City'
              size='lg'
            />
            <Input
              onChange={(e) =>
                setForm({
                  ...form,
                  address: { ...form.address, province: e.target.value },
                })
              }
              type='text'
              label='Province'
              size='lg'
            />

            {/* Role Tabs */}
            <Tabs
              defaultValue='employer' // Default tab value
              color='blue'
              size='lg'
              className='mb-4'>
              <Tab
                value='employer'
                onClick={() => setForm({ ...form, role: 'employer' })}
              >
                Employer
              </Tab>
              <Tab
                value='jobseeker'
                onClick={() => setForm({ ...form, role: 'jobseeker' })}
              >
                Jobseeker
              </Tab>
            </Tabs>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button
              onClick={handleSubmitSignup}
              disabled={loadingSignup}
              className='bg-blue-gray-900'
              fullWidth>
              Signup
            </Button>
            <div className='mt-4 text-center'>
              {isLogin ? (
                <p>
                  Tidak punya akun? <Link to='/signup'>Daftar</Link>
                </p>
              ) : (
                <p>
                  Sudah punya akun? <Link to='/login'>Login</Link>
                </p>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Signup;
