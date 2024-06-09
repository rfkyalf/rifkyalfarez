'use client';

import { ReactTyped } from 'react-typed';

export function Name() {
  return (
    <h1 className="text-xl md:text-2xl  xl:text-4xl font-bold text-neutral-950 dark:text-neutral-50">
      Hi, I&apos;m{' '}
      <ReactTyped
        strings={['Rifky Alfarez', 'Frontend Developer']}
        typeSpeed={50}
        backSpeed={30}
        backDelay={2000}
        cursorChar="/>"
        loop
      />
    </h1>
  );
}
