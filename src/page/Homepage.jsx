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
    <div>
      <Navbar />
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
