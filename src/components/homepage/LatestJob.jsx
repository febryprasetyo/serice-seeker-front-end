/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { layout } from '@/style';
import { CardJob } from '@/components';
import { Typography } from '@material-tailwind/react';

const LatestJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get('https://service-seeker-api.vercel.app/jobs/all')
      .then((response) => {
        const res = response.data.jobs;
        setJobs(res.reverse().slice(0, 5));
        // console.log(response.data.jobs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <Typography variant='h2'>Latest Jobs</Typography>
        {jobs.map(({ id, title, address, category }, index) => (
          <CardJob
            key={id}
            title={title}
            address={address}
            category={category}
          />
        ))}
      </div>
      <div className={layout.sectionInfo}></div>
    </section>
  );
};

export default LatestJob;
