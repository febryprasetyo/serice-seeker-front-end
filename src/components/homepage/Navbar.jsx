import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo, close, menu } from '@/assets';
import Button from '../Button';
import { navLinks } from '@/constants';
import styles from '@/style';
import { useAuth } from '@/store/auth';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const { isLogin } = useAuth();

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className='w-full flex py-6 justify-between items-center navbar'>
            <NavLink to='/'>
              <img src={Logo} alt='hoobank' className='w-[124px] ' />
            </NavLink>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-dimWhite'
                  } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                  onClick={() => setActive(nav.title)}
                >
                  <NavLink to={`${nav.id}`}>{nav.title}</NavLink>
                </li>
              ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain'
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${
                  !toggle ? 'hidden' : 'flex'
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className='list-none flex justify-end items-start flex-1 flex-col'>
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? 'text-white' : 'text-dimWhite'
                      } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kondisional rendering untuk button login */}
            {!isLogin && (
              <div>
                <Link to='/login'>
                  <Button styles='ml-4' name='Login' />
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
