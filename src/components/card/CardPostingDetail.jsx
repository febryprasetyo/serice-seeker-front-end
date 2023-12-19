import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react';
import { Button } from '@/components';

// eslint-disable-next-line react/prop-types
const CardPostingDetail = ({ createdBy }) => {
  return (
    <div>
      <Card className='w-full'>
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='m-0 rounded-none h-16 px-5 py-5'>
          <Typography variant='h5' color='blue-gray' className=''>
            Posted By
          </Typography>
        </CardHeader>
        <CardBody className='divide-y'>
          <div className='flex gap-4 mb-4'>
            <Avatar
              size='lg'
              variant='circular'
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
              alt={createdBy}
            />
            <div className='flex w-full flex-col gap-0.5'>
              <div className='flex items-center justify-between'>
                <Typography variant='h3' color='blue-gray'>
                  {createdBy}
                </Typography>
              </div>
            </div>
          </div>
          <div>
            <Button
              name='Apply'
              styles={
                'w-full py-4 px-6 mt-2 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none w-[200px]'
              }
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardPostingDetail;
