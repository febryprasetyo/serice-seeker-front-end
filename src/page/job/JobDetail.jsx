import { useState, useEffect } from 'react';
import styles from '@/style';
import { useParams } from 'react-router-dom';

import { Typography } from '@material-tailwind/react';
import { CardPostingDetail } from '@/components';
import { BanknotesIcon, MapPinIcon } from '@heroicons/react/20/solid';
import { getJobById } from '@/api/api';

const JobDetail = () => {
  const { id } = useParams();
  // output will be: June 15, 1990

  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const response = await getJobById(id);

        if (response.success) {
          setDetail(response);
          // console.log(response.jobId);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestJobs();
  }, []);

  const dateFromData = detail.createdAt; //string type
  const formatDate = (dateString) => {
    const options = {
      //Typescript ways of adding the type
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('id', options);
  };
  const jobPost = formatDate(dateFromData);
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div
          className={`bg-primary flex md:flex-row flex-col ${styles.paddingY}`}>
          <div
            className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[56px] text-[38px] text-white  text-center '>
              <span className='text-gradient'> Job Details </span>
            </h1>
            <p className={`${styles.paragraph} mt-5 mb-2 sm:mb-10`}>
              Here will be your company job details & requirements
            </p>
          </div>
        </div>
        <div
          className={`bg-blue-gray-50 ${styles.paddingX} ${styles.paddingY}`}>
          <div className={`flex flex-wrap gap-10 `}>
            <div className={`bg-white grow p-8 w-3/12`}>
              <Typography variant='lead'>
                {jobPost} by{' '}
                <span className='font-bold'>{detail.createdBy}</span>
              </Typography>
              <Typography className='mb-2' variant='h1'>
                {detail.title}
              </Typography>
              <Typography
                className='mb-2 font-thin text-[#214d76]'
                variant='lead'>
                {detail.category}
              </Typography>
              <div className='flex gap-10'>
                {detail.status == 'Open' ? (
                  <div className='bg-blue-500 max-w-fit px-10 py-2 text-white font-extrabold rounded-md text-center align-middle'>
                    {detail.status}
                  </div>
                ) : (
                  <div className='bg-red-600 max-w-fit px-10 py-2 text-white font-extrabold rounded-md text-center align-middle'>
                    {detail.status}
                  </div>
                )}
                <div className='flex py-1 content-center align-middle gap-2'>
                  <BanknotesIcon
                    className=' w-8 text-blue-gray-600'
                    aria-hidden='true'
                    // color='blue-gray-200'
                  />
                  <Typography variant='h5'>Rp. {detail.budget}</Typography>
                </div>
                <div className='flex py-1 content-center align-middle gap-2'>
                  <MapPinIcon
                    className=' w-8 text-blue-gray-600'
                    aria-hidden='true'
                  />
                  <Typography variant='h5'>{detail.address}</Typography>
                </div>
              </div>
              <div className='mt-8'>
                <hr />
                <Typography variant='h3' className='mt-4'>
                  Description
                </Typography>
                <Typography className='mt-2'>{detail.description}</Typography>
              </div>
            </div>
            <div className={` w-1/3`}>
              <CardPostingDetail createdBy={detail.createdBy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
