import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Logo, close, menu, defaultUserProfileImage } from '@/assets';
import { navLinks } from '@/constants';
import styles from '@/style';
import { useAuth } from '@/store/auth';
import { getUserProfile } from '../../api/api';

const Navbar = () => {
  // State variables
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const { isLogin, logOut } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate()

  // Fetch user profile on login
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setUserProfile(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (isLogin) {
      fetchUserProfile();
    }
  }, [isLogin]);

 // Filter out login and signup links only when the user is logged in
 const filteredNavLinks = isLogin
 ? navLinks.filter((nav) => nav.id !== 'login' && nav.id !== 'signup')
 : navLinks;

 // Determine profile image
  const profileImage = userProfile?.data.profileImage || defaultUserProfileImage;

  // Logout handler
  const handleLogout = () => {
    logOut();
    setToggle(true);
    // Redirect to the home page after logout
    navigate('/');
  };

  console.log()
  // Render user menu
  const renderUserMenu = () => (
    <div className={`relative ${styles.cursorPointer} ml-auto`}>
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        {userProfile ? (
          <img src={profileImage} alt="Profile" className="w-12 h-12 object-cover rounded-full" />
        ) : (
          <img src={defaultUserProfileImage} alt="Default Profile" className="w-8 h-8 object-cover rounded-full" />
        )}
      </div>

      {toggle && (
        <div className={`relative right-0 mt-2 w-48 bg-black-gradient rounded-md shadow-lg py-1 ${styles.userMenu}`}>
          <NavLink to="/dashboard">
            <div className="block px-4 py-2 text-dimWhite hover:bg-gray-200">Dashboard</div>
          </NavLink>
          <div
            className="block px-4 py-2 text-dimWhite hover:bg-gray-200 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <NavLink to="/">
              <img src={Logo} alt="hoobank" className="w-[124px] " />
            </NavLink>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {filteredNavLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-dimWhite'
                  } ${index === filteredNavLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                  onClick={() => setActive(nav.title)}
                >
                  <NavLink to={`/${nav.id}`}>{nav.title}</NavLink>
                </li>
              ))}
              {isLogin && <li className="ml-10">{renderUserMenu()}</li>}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${
                  !toggle ? 'hidden' : 'flex'
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {isLogin && <li className="mb-4">{renderUserMenu()}</li>}
                  {filteredNavLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? 'text-white' : 'text-dimWhite'
                      } ${index === filteredNavLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`/${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
