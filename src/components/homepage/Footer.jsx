import { Link } from 'react-router-dom';
import styles from '@/style';

const footer = () => {
  return (
        <div className="bg-primary w-full overflow-hidden text-white p-4 text-center ">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <nav className="flex justify-center space-x-4 mb-4">
                <Link to="/about-us">About Us</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/term-of-service">Term of Service</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </nav>
              <p>&copy; 2023 Service Seeker. All rights reserved.</p>
            </div>
          </div>
        </div>
  );
};

export default footer;
