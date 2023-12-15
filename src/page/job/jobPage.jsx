import styles from '../../style';
import JobList from '../../components/jobs/jobList'

const JobPage = () => {
  return <div className='bg-primary w-full overflow-hidden'>
    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <JobList />
      </div>
    </div>
  </div>;
  
};

export default JobPage;
