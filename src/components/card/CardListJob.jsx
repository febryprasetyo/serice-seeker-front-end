/* eslint-disable react/prop-types */
import { Button, Card, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
const CardListJob = ({ id, category, title, price, address, distance }) => {
  return (
    <div>
      <Card className='flex justify-between gap-x-6 p-10 border-2 border-sky-500'>
        <div className='flex min-w-0 gap-x-8'>
          <img
            className='h-45 w-45 flex-none'
            src={
              'https://html.creativegigstf.com/jobi/jobi/images/logo/media_23.png'
            }
            alt=''
          />
          <NavLink to={`/jobs/${id}`} className='min-w-0 flex-auto'>
            <Typography className='mt-1 truncate  leading-5 text-gray-500'>
              {category}
            </Typography>
            <Typography className='text-2xl font-semibold leading-6 text-gray-900 mt-2'>
              {title}
            </Typography>
          </NavLink>
          <div className='flex flex-row gap-24'>
            <div className=''>
              <Typography className=' leading-6 text-gray-500'>
                {address} <span>| {distance} Km</span>
              </Typography>
              <Typography className=' leading-6 text-gray-500'>
                {price}
              </Typography>
            </div>
            <div>
              <Button className='rounded-full shadow-none'>apply</Button>
            </div>
          </div>
        </div>
        {/* <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
          
        </div> */}
      </Card>
    </div>
  );
};

export default CardListJob;
