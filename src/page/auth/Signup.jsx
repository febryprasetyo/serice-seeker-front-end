/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/store/auth';
import styles from '@/style';
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
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
    address: '',
    phone: '',
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
      !form.address ||
      !form.phone ||
      !form.password
    ) {
      setErrForm('Pastikan semua kolom terisi');
      return;
    }
    setLoadingSignup(true);
    // Sesuaikan parameter role sesuai dengan tab yang dipilih
    const role = type === 'employer' ? 'employer' : 'job_seeker';
    actionSignup({ ...form, role });
  };

  useEffect(() => {
    if (isSignup) {
      navigate('/login');
    }
  }, [isSignup, navigate]);

  const [type, setType] = useState('employer');

  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex-1 ${styles.flexCenter} mb-12`}>
            <Card className='w-full max-w-[470px] mt-12'>
              <CardHeader
                color='gray'
                floated={false}
                shadow={false}
                className='m-0 grid place-items-center px-4 py-8 text-center'>
                <Typography variant='h5' color='white'>
                  Create Account
                </Typography>
              </CardHeader>
              <CardBody>
                <Tabs value={type} className='overflow-hidden'>
                  <TabsHeader className='relative z-0'>
                    <Tab value='employer' onClick={() => setType('employer')}>
                      Employer
                    </Tab>
                    <Tab value='job_seeker' onClick={() => setType('job_seeker')}>
                      Job Seeker
                    </Tab>
                  </TabsHeader>
                  <TabsBody className='!overflow-x-hidden !overflow-y-hidden'>
                    <TabPanel value='employer' className='p-0'>
                      {/* Employer Form */}
                      <form className='mt-8 flex flex-col gap-4'>
                        <div className='my-4 flex items-center gap-4'>
                          <div>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='mb-2 font-medium'>
                              First Name
                            </Typography>
                            <Input
                              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                              maxLength={5}
                              containerProps={{ className: 'min-w-[72px]' }}
                              placeholder='First Name'
                              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                          <div>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='mb-2 font-medium'>
                              Last Name
                            </Typography>
                            <Input
                              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                              maxLength={4}
                              containerProps={{ className: 'min-w-[72px]' }}
                              placeholder='Last Name'
                              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium'>
                            Username
                          </Typography>
                          <Input
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                            type='text'
                            placeholder='Username'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium'>
                            Your Email
                          </Typography>
                          <Input
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            type='email'
                            placeholder='name@mail.com'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium capitalize'>
                            Address
                          </Typography>

                          <Input
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                            maxLength={19}
                            placeholder='Address'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium '>
                            Phone
                          </Typography>

                          <Input
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            maxLength={13}
                            placeholder='Phone Number'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium'>
                            Password
                          </Typography>
                          <Input
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            type='password'
                            placeholder='**********'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <Button onClick={handleSubmitSignup} disabled={loadingSignup} size='lg'>
                          Register
                        </Button>
                      </form>
                    </TabPanel>

                    <TabPanel value='job_seeker' className='p-0'>
                      {/* Job Seeker Form */}
                      <form className='mt-8 flex flex-col gap-4'>
                        <div className='my-4 flex items-center gap-4'>
                          <div>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='mb-2 font-medium'>
                              First Name
                            </Typography>
                            <Input
                              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                              maxLength={5}
                              containerProps={{ className: 'min-w-[72px]' }}
                              placeholder='First Name'
                              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                          <div>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='mb-2 font-medium'>
                              Last Name
                            </Typography>
                            <Input
                              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                              maxLength={4}
                              containerProps={{ className: 'min-w-[72px]' }}
                              placeholder='Last Name'
                              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                              labelProps={{
                                className: 'before:content-none after:content-none',
                              }}
                            />
                          </div>
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium'>
                            Username
                          </Typography>
                          <Input
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                            type='text'
                            placeholder='Username'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium'>
                            Your Email
                          </Typography>
                          <Input
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            type='email'
                            placeholder='name@mail.com'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium '>
                            Address
                          </Typography>

                          <Input
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                            maxLength={19}
                            placeholder='Address'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium '>
                            Phone
                          </Typography>

                          <Input
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            maxLength={13}
                            placeholder='Phone Number'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='mb-2 font-medium'>
                            Password
                          </Typography>
                          <Input
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            type='password'
                            placeholder='**********'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className: 'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <Button onClick={handleSubmitSignup} disabled={loadingSignup} size='lg'>
                          Register
                        </Button>
                      </form>
                    </TabPanel>
                  </TabsBody>
                </Tabs>
              </CardBody>
              {errForm && (
                <Typography className='text-sm' color='red'>
                  {errForm}
                </Typography>
              )}
              {errMsg && (
                <Typography className='text-sm' color='blue'>
                  {errMsg}
                </Typography>
              )}
              <div className='mt-4 text-center'>
                {isLogin ? (
                  <p>
                    Tidak punya akun? <Link to='/signup'>Daftar</Link>
                  </p>
                ) : (
                  <p>
                    Sudah punya akun?{' '}
                    <Link to='/login' className='font-bold'>
                      Login
                    </Link>
                  </p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
