'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoIosPartlySunny } from 'react-icons/io';
import { FaCloudMoon } from 'react-icons/fa';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === 'dark' ? (
        <button
          className="bg-blue-950 hover:bg-blue-900 transition-colors duration-300 text-yellow-300 rounded-2xl px-2"
          onClick={() => setTheme('light')}
        >
          <div>
            <FaCloudMoon size={25} />
          </div>
        </button>
      ) : (
        <button
          className="bg-sky-200 hover:bg-sky-300 transition-colors duration-300 text-orange-700 rounded-2xl px-2"
          onClick={() => setTheme('dark')}
        >
          <div>
            <IoIosPartlySunny size={25} />
          </div>
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
