import { useEffect, useState } from 'react';
import { searchJobs } from '../../api/api';
import { layout } from '@/style';
import { JobCard } from '@/components';
import styles from '../../style';
import { Typography } from '@material-tailwind/react';
import GoogleMap from '../../components/googleMaps'; // Import the GoogleMap component

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const queryParams = {
          status: 'Open',
          sortBy: 'desc',
          page: 1,
          radius: 20000,
        };

        const response = await searchJobs(queryParams);

        if (response.success) {
          setJobs(response.jobs.jobs);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestJobs();
  }, []);

  return (
    <section className={layout.section}>
      <div className={`${styles.boxWidth}`}>
        <Typography variant='h2'>Jobs List</Typography>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            {jobs.map((job) => (
              <JobCard
                key={job._id}
                title={job.title}
                address={job.address}
                category={job.category}
                distance={job.distance}
                budget={job.budget}
              />
            ))}
          </div>
          <div style={{ marginLeft: '30px' }}>
            {/* Add margin-bottom to GoogleMap container to create gap */}
            <GoogleMap locations={jobs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobList;
