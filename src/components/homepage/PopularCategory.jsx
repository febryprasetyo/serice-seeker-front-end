// import { stats } from '../../constants';

import styles from '@/style';
import CardCategory from '@/components/card/card-category';
import { Typography } from '@material-tailwind/react';
import Button from '@/components/Button';
const PopularCategory = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6`}>
      <div
        className={`${styles.paddingY} ${styles.flexCenter} flex-col flex-wrap`}>
        <Typography variant='h2' color='blue-gray'>
          Popular Job Categories
        </Typography>
        <Typography color='blue-gray'>
          Explore a wide range of job opportunities
        </Typography>
      </div>
      <div className='grid grid-flow-col gap-4'>
        <CardCategory value='123' category='Category 1' />
        <CardCategory value='123' category='Category 1' />
        <CardCategory value='123' category='Category 1' />
        <CardCategory value='123' category='Category 1' />
        <CardCategory value='123' category='Category 1' />
        <CardCategory value='123' category='Category 1' />
      </div>
      <div>
        <Button styles={'h-full w-[200px] mt-12'} name={'See all category'} />
      </div>
    </section>
  );
};

export default PopularCategory;
