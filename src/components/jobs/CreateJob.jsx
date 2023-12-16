/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from '@material-tailwind/react';
import toast from 'react-hot-toast';

export const CreateJob = ({ isOpen, handleOpen }) => {
  return (
    <Dialog size='xs' open={isOpen} handler={handleOpen}>
      <DialogHeader>Tambah Device</DialogHeader>
      <form onSubmit={''}>
        <DialogBody>
          <div>
            <Typography variant='h6' color='blue-gray' className=''>
              ID Mesin
            </Typography>
            <Input
              size='md'
              placeholder='Id mesin'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              crossOrigin={undefined} // labelProps={{
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />

            <Typography variant='h6' color='blue-gray' className='mt-3'>
              Nama Dinas
            </Typography>
            <Input
              size='md'
              placeholder='Nama Dinas'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              crossOrigin={undefined} // labelProps={{
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />

            <Typography variant='h6' color='blue-gray' className='mt-3'>
              Nama Stasiun
            </Typography>
            <Input
              size='md'
              placeholder='Nama stasiun'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              crossOrigin={undefined} // labelProps={{
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={() => handleOpen(false)}
            className='mr-1'>
            <span>Batal</span>
          </Button>
          <Button variant='gradient' color='green' type='submit'>
            <span>Simpan</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};
