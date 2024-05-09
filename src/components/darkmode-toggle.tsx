'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

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
          className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-xl transition-colors duration-300 ease-in-out"
          onClick={() => setTheme('light')}
        >
          <div>
            <IoMoon className="text-gray-950 dark:text-gray-50 w-6 h-6 md:w-[26px] md:h-[26px]" />
          </div>
        </button>
      ) : (
        <button
          className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-xl transition-colors duration-300 ease-in-out"
          onClick={() => setTheme('dark')}
        >
          <div>
            <IoSunny
              size={25}
              className="text-gray-950 dark:text-gray-50  w-6 h-6 md:w-[26px] md:h-[26px]"
            />
          </div>
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
