import { Search } from '../../components';
import styles from '../../style';

const Hero = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white  text-center '>
          Find Reliable
          <span className='text-gradient'> Job and Service </span>
          Opportunities.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Effortlessly connect employers and job seekers
        </p>
        <Search />
      </div>
    </section>
  );
};

export default Hero;
