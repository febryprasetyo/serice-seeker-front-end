import styles from '../style';

import {
  Footer,
  Hero,
  LatestJob,
  Navbar,
  PopularCategory,
  PopularReview,
  WhyChoose,
} from '../components';

const Homepage = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Hero />
      <PopularCategory />
      <WhyChoose />
      <PopularReview />
      <LatestJob />
      <Footer />
    </div>
  );
};

export default Homepage;
