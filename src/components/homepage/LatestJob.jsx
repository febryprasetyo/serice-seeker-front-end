/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getAllJobs } from '../../api/api';
import { layout } from '@/style';
import { CardJob } from '@/components';
import { Typography } from '@material-tailwind/react';

const LatestJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const response = await getAllJobs('Open', 'desc', null, 1);
        setJobs(response.jobs.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestJobs();
  }, []);

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <Typography variant='h2'>Latest Jobs</Typography>
        {jobs.map(({ id, title, address, category }, index) => (
          <CardJob key={id} title={title} address={address} category={category} />
        ))}
      </div>
      <div className={layout.sectionInfo}></div>
    </section>
  );
};

export default LatestJob;
