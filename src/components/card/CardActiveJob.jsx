import { Card, CardBody, Typography } from '@material-tailwind/react';

const CardActiveJob = ({ title, status }) => {
  return (
    <div>
      <Card className='w-70'>
        <div className='h-20 flex mt-4  justify-center'>
          <img
            className='h-20 w-20 rounded-full object-cover object-center'
            src='https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
            alt='nature image'
          />
        </div>
        <CardBody className='text-center'>
          <Typography variant='h5' color='blue-gray' className='mb-2'>
            {title}
          </Typography>
          <Typography color='blue-gray' className='font-medium' textGradient>
            {status}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardActiveJob;
