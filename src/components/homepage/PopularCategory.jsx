import { useEffect, useState } from 'react';
import { countJobsByCategory } from '@/api/api'; // Sesuaikan path dengan struktur folder Anda
import styles from '@/style';
import CardCategory from '@/components/card/card-category';
import { Typography } from '@material-tailwind/react';
import Button from '@/components/Button';

const PopularCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await countJobsByCategory();
        if (response.success) {
          setCategories(response.data);
        } else {
          console.error('Error fetching job categories:', response.message);
        }
      } catch (error) {
        console.error('Error fetching job categories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6`}>
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
        {categories.map((category) => (
          <CardCategory key={category._id} value={category.count} category={category._id} />
        ))}
      </div>
      <div>
        <Button styles={'h-full w-[200px] mt-12'} name={'See all category'} />
      </div>
    </section>
  );
};

export default PopularCategory;
