import React from 'react';

import styles, { layout } from '@/style';
import { Avatar, Card, Typography } from '@material-tailwind/react';
import {
  Button,
  CardActiveJob,
  CardDoneJob,
  CardReviewDashboard,
} from '@/components';

const Dashboard = () => {
  return (
    <div className='bg-dimWhite'>
      <div
        className={`${styles.sectionInfo} divide-y-[1px] grid grid-cols-1 divide-dimBlue`}>
        <div className={`${styles.padding} ${styles.flexStart} `}>
          <Card
            color='transparent'
            shadow={false}
            className={`w-full ${styles.paddingX}`}>
            <div className='flex gap-10'>
              <Avatar
                size='xxl'
                src='https://docs.material-tailwind.com/img/face-2.jpg'
                alt='avatar'></Avatar>
              <div>
                <Typography variant='h3'>Nama Penyedia</Typography>
                <Typography>Nama Penyedia</Typography>
                <Typography>Deskripsi</Typography>
              </div>
            </div>
          </Card>
          <div>
            <Button
              name={'Post a Job'}
              styles={
                'w-[140px] py-3 px-4 font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none'
              }
            />
          </div>
        </div>

        {/* Pekerjaan Aktif */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={layout.section}>
              <div className={layout.sectionImg}>
                <div>
                  <Typography variant='h4'>Pekerjaan Aktif</Typography>
                </div>
              </div>
              <div className={layout.sectionInfo}>
                <CardActiveJob title={'Judul pekerjaan'} status={'Status 1'} />
              </div>
            </section>
          </div>
        </div>
        {/* Pekerjaan Pekerjaan Selesai */}
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={layout.section}>
              <div className={layout.sectionImg}>
                <div>
                  <Typography variant='h4'>Pekerjaan Selesai</Typography>
                </div>
              </div>
              <div className={layout.sectionInfo}>
                <CardDoneJob
                  title={'Judul pekerjaan'}
                  status={'Hasil Review'}
                />
              </div>
            </section>
          </div>
        </div>
        {/* Review */}
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={layout.section}>
              <div className={layout.sectionImg}>
                <div>
                  <Typography variant='h4'>Rating dan Ulasan</Typography>
                </div>
              </div>
              <div className={layout.sectionInfo}>
                <CardReviewDashboard
                  nama={'Nama Reviewer'}
                  rating={'3'}
                  desc={
                    'I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys'
                  }
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
