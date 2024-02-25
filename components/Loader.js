import React from 'react';
import { useTheme } from 'next-themes';

const Loader = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex justify-center items-center ${theme === 'dark' ? '' : ''} text-${theme === 'dark' ? 'white' : 'black'}`}>
      <img src='/logo.png' alt="Loading..." className="animate-spin h-24 w-24" />
      <h1 className='font-bold font-serif'>Loading....</h1>
    </div>
  );
};

export default Loader;
