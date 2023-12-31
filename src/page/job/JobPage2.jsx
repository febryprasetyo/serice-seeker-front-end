/* eslint-disable no-unused-vars */
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

import styles from '@/style';
import { Card, Typography } from '@material-tailwind/react';
import { sortOptions, subCategories, filters } from '@/constants';
import { CardListJob, RadiusFilter, SearchFilter } from '@/components';
import { searchJobs } from '@/api/api';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const JobPage2 = () => {
  const [jobs, setJobs] = useState([]);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const queryParams = {
          status: 'Open',
          sortBy: 'desc',
          page: 1,
          radius: 20000,
        };

        const response = await searchJobs(queryParams);

        if (response.success) {
          setJobs(response.jobs.jobs);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestJobs();
  }, []);
  return (
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div
          className={`bg-primary flex md:flex-row flex-col ${styles.paddingY}`}>
          <div
            className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[56px] text-[38px] text-white  text-center '>
              <span className='text-gradient'> Find a Job Around you </span>
            </h1>
            <p className={`${styles.paragraph} mt-5 mb-2 sm:mb-10`}>
              Search for job openings near you
            </p>
          </div>
        </div>

        {/* MOBILE FILTER */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 lg:hidden'
            onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'>
                <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                  <div className='flex items-center justify-between px-4'>
                    <h2 className='text-lg font-medium text-gray-900'>
                      Filters
                    </h2>
                    <button
                      type='button'
                      className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                      onClick={() => setMobileFiltersOpen(false)}>
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className='mt-4 border-t border-gray-200'>
                    <h3 className='sr-only'>Categories</h3>
                    <ul
                      role='list'
                      className='px-2 py-3 font-medium text-gray-900'>
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className='block px-2 py-3'>
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as='div'
                        key={section.id}
                        className='border-t border-gray-200 px-4 py-6'>
                        {({ open }) => (
                          <>
                            <h3 className='-mx-2 -my-3 flow-root'>
                              <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
                                <span className='font-medium text-gray-900'>
                                  {section.name}
                                </span>
                                <span className='ml-6 flex items-center'>
                                  {open ? (
                                    <MinusIcon
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                  ) : (
                                    <PlusIcon
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className='pt-6'>
                              <div className='space-y-6'>
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className='flex items-center'>
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type='checkbox'
                                      defaultChecked={option.checked}
                                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className='ml-3 min-w-0 flex-1 text-gray-500'>
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* MAIN COMPONENT */}
        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <section aria-labelledby='products-heading' className='pb-24 pt-6'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <div>
                <Typography variant='h4' className='mb-4'>
                  Filter By
                </Typography>
                <Card className='px-4 pb-8 bg-dimBlue'>
                  <form className='hidden lg:block'>
                    <Disclosure
                      as='div'
                      className='border-b border-primary py-6'>
                      {({ open }) => (
                        <>
                          <h3 className='-my-3 flow-root'>
                            <Disclosure.Button className='flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500'>
                              <span className='font-medium text-gray-900'>
                                Search
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <FaMinusCircle
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <FaPlusCircle
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6 rounded-lg'>
                            <div className='space-y-4'>
                              <SearchFilter />
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure
                      as='div'
                      className='border-b border-primary py-6'>
                      {({ open }) => (
                        <>
                          <h3 className='-my-3 flow-root'>
                            <Disclosure.Button className='flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500'>
                              <span className='font-medium text-gray-900'>
                                Radius
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <FaMinusCircle
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <FaPlusCircle
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6 rounded-lg'>
                            <div className='space-y-4'>
                              <RadiusFilter />
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </form>
                </Card>
              </div>

              {/*  List */}
              <div className='lg:col-span-3'>
                <div className='flex items-center content-end justify-end '>
                  <Menu as='div' className='relative inline-block text-left'>
                    <div>
                      <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                        Sort
                        <ChevronDownIcon
                          className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'>
                      <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='py-1'>
                          {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                              {({ active }) => (
                                <a
                                  href={option.href}
                                  className={classNames(
                                    option.current
                                      ? 'font-medium text-gray-900'
                                      : 'text-gray-500',
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                  )}>
                                  {option.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  {/* Filter */}
                  <button
                    type='button'
                    className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
                    onClick={() => setMobileFiltersOpen(true)}>
                    <span className='sr-only'>Filters</span>
                    <FunnelIcon className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
                <div className='flex flex-col border-l-purple-700 gap-3'>
                  {jobs.map((job) => (
                    <CardListJob
                      key={job._id}
                      id={job._id}
                      address={job.address}
                      distance={job.distance}
                      price={job.budget}
                      title={job.title}
                      category={job.category}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default JobPage2;
