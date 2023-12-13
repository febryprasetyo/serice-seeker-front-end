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
import { useState } from 'react';

const Signin = () => {
  const { type, setType } = useState('job_sekeer');
  return (
    <div className=' w-full overflow-hidden'>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div
            className={`bg-primary flex md:flex-row flex-col ${styles.paddingY}`}>
            <div
              className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
              <h1 className='flex-1 font-poppins font-semibold ss:text-[56px] text-[38px] text-white  text-center '>
                <span className='text-gradient'> Register </span>
              </h1>
              <p
                className={`${styles.paragraph} max-w-[470px] mt-5 mb-2 sm:mb-10`}>
                Create an account & Start posting or hiring talents
              </p>
            </div>
          </div>
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
                <Tabs value={type} className='overflow-visible'>
                  <TabsHeader className='relative z-0 '>
                    <Tab value='employer' onClick={() => setType('employer')}>
                      Employer
                    </Tab>
                    <Tab
                      value='job_sekeer'
                      onClick={() => setType('job_sekeer')}>
                      Job Seeker
                    </Tab>
                  </TabsHeader>
                  <TabsBody
                    className='!overflow-x-hidden !overflow-y-visible'
                    animate={{
                      initial: {
                        x: type === 'employer' ? 400 : -400,
                      },
                      mount: {
                        x: 0,
                      },
                      unmount: {
                        x: type === 'employer' ? 400 : -400,
                      },
                    }}>
                    <TabPanel value='employer' className='p-0'>
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
                              maxLength={5}
                              containerProps={{ className: 'min-w-[72px]' }}
                              placeholder='First Name'
                              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                              labelProps={{
                                className:
                                  'before:content-none after:content-none',
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
                              maxLength={4}
                              containerProps={{ className: 'min-w-[72px]' }}
                              placeholder='Last Name'
                              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                              labelProps={{
                                className:
                                  'before:content-none after:content-none',
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
                            type='text'
                            placeholder='Username'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
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
                            type='email'
                            placeholder='name@mail.com'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
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
                            maxLength={19}
                            placeholder='Phone Number'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
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
                            type='password'
                            placeholder='**********'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <Button size='lg'>Register</Button>
                      </form>
                    </TabPanel>
                    <TabPanel value='job_sekeer' className='p-0'>
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
                              maxLength={5}
                              containerProps={{ className: 'min-w-[72px]' }}
                              placeholder='First Name'
                              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                              labelProps={{
                                className:
                                  'before:content-none after:content-none',
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
                              maxLength={4}
                              containerProps={{ className: 'min-w-[72px]' }}
                              placeholder='Last Name'
                              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                              labelProps={{
                                className:
                                  'before:content-none after:content-none',
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
                            type='text'
                            placeholder='Username'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
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
                            type='email'
                            placeholder='name@mail.com'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
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
                            maxLength={19}
                            placeholder='Phone Number'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
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
                            type='password'
                            placeholder='**********'
                            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                            labelProps={{
                              className:
                                'before:content-none after:content-none',
                            }}
                          />
                        </div>
                        <Button size='lg'>Register</Button>
                      </form>
                    </TabPanel>
                  </TabsBody>
                </Tabs>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
