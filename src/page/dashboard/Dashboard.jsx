import { useState, useEffect } from 'react';
import styles, { layout } from '@/style';
import { Avatar, Card, Typography } from '@material-tailwind/react';
import { Button, CardActiveJob, CardReviewDashboard } from '@/components';
import { MapPinIcon, StarIcon, UserIcon } from '@heroicons/react/20/solid';
import { getUserProfile, getUserJobs } from '../../api/api';
import Loader from '../../common/loader';

// Import the EditProfileForm component
import EditProfileForm from './editProfileForm';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [profileData, setProfileData] = useState(null);
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile data
        const profileResponse = await getUserProfile();

        if (profileResponse.success) {
          setProfileData(profileResponse.data);

          if (profileResponse.data && profileResponse.data.username) {
            // Fetch user jobs data
            const jobsResponse = await getUserJobs(profileResponse.data.username);

            if (jobsResponse.success) {
              setJobsData(jobsResponse.data);
            } else {
              console.error('Failed to fetch jobs:', jobsResponse.status);
            }
          } else {
            console.error('Username not available in profile data');
          }
        } else {
          console.error('Failed to fetch user profile:', profileResponse.status);
        }
      } catch (error) {
        console.error('Error fetching user profile or jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isProfileUpdated]);

  return (
    <div className='bg-white w-full overflow-hidden mt-20'>
      {/* Bagian Profil */}
      {loading ? (
        <Loader />
      ) : profileData ? (
        <Card color='transparent' shadow={false} className={`w-full ${styles.paddingX}`}>
          <div className='flex gap-10'>
            <Avatar size='xxl' src={profileData.profileImage} alt='avatar'></Avatar>
            <div>
              <Typography variant='h3'>{`${profileData.firstName} (${profileData.username})`}</Typography>
              <div className='flex py-1 content-center align-middle gap-2'>
                <UserIcon className=' w-5 text-blue-gray-500' aria-hidden='true' />
                <Typography>{`${profileData.role}`}</Typography>
              </div>
              <div className='flex py-1 content-center align-middle gap-2'>
                <StarIcon className=' w-5 text-yellow-700' aria-hidden='true' />
                <Typography>
                  {profileData.ratings.averageRating !== 0
                    ? profileData.ratings.averageRating
                    : 'N/A'}
                </Typography>
              </div>
              <div className='flex py-1 content-center align-middle gap-2'>
                <MapPinIcon className=' w-5 text-red-400' aria-hidden='true' />
                <Typography>{`${profileData.address}`}</Typography>
              </div>
            </div>
          </div>
          {/* Add the button to trigger the edit form */}
          <button onClick={() => setIsEditingProfile(true)}>Edit Profile</button>
        </Card>
      ) : (
        <p>Error loading profile data</p>
      )}

      {/* Bagian Tab Menu */}
      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} mt-4`}>
          <div className='flex space-x-4'>
            <button
              onClick={() => setActiveTab(0)}
              className={`${
                activeTab === 0 ? 'bg-primary text-white' : 'text-primary'
              } px-4 py-2 rounded`}
            >
              Pekerjaan saya
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`${
                activeTab === 1 ? 'bg-primary text-white' : 'text-primary'
              } px-4 py-2 rounded`}
            >
              Rating dan Ulasan
            </button>
          </div>
        </div>
      </div>

      {/* Konten Tab */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} mt-4 flex flex-wrap`}>
          {activeTab === 0 && profileData?.username ? (
            <section className={`${layout.section} flex flex-wrap justify-start`}>
              {jobsData.map((job) => (
                <CardActiveJob key={job._id} title={job.title} status={job.status} />
              ))}
            </section>
          ) : null}

          {activeTab === 1 && (
            <section className={layout.section}>
              <div className={layout.sectionInfo}>
                <CardReviewDashboard
                  nama={'Nama Reviewer'}
                  rating={'3'}
                  desc={
                    'I found a solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it\'s really affordable, very humble guys.'
                  }
                />
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Post a Job Button */}
      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} mt-4`}>
          <Button
            name={'Post a Job'}
            styles={
              'w-[140px] py-3 px-4 font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none'
            }
          />
        </div>
      </div>

      {/* Conditionally render the EditProfileForm */}
      {isEditingProfile && <EditProfileForm onCancel={() => setIsEditingProfile(false)} onProfileUpdate={() => setIsProfileUpdated((prev) => !prev)} />}
    </div>
  );
};

export default Dashboard;
