import Button from './Button';

const Search = () => {
  return (
    <>
      <form className='bg-white shadow-md rounded px-2  my-4 sm:w-[500px] w-[300px]'>
        <div className='flex items-center border-b border-teal-500 py-2'>
          <input
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none '
            type='text'
            placeholder='Search for jobs or services'
            aria-label='search'
          />
        </div>
      </form>
      <Button name='Search' styles={'w-[200px]'} />
    </>
  );
};

export default Search;
