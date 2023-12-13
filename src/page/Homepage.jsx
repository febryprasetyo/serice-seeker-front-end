import { useState, useEffect } from 'react';
import styles from '../style';

import {
  Footer,
  Hero,
  LatestJob,
  PopularCategory,
  PopularReview,
  WhyChoose,
} from '../components';

import { useAuth } from '@/store/auth';

const Homepage = () => {
  const { isLogin, user } = useAuth();

  useEffect(() => {
    // eslint-disable-next-line no-constant-condition

    if (!isLogin) {
      console.log('login');
    }
  }, [isLogin]);
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <PopularCategory />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <WhyChoose />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <PopularReview />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <LatestJob />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
