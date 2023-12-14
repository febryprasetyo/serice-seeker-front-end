import { layout } from '@/style';
import { CardReview } from '@/components';

const PopularReview = () => {
  return (
    <section className={layout.section}>
      <div className={`w-1/3`}></div>
      <div className={` grid grid-flow-col gap-10`}>
        <CardReview nama='febry' rating='3' />
        <CardReview nama='febry' rating='3' />
      </div>
    </section>
  );
};

export default PopularReview;
