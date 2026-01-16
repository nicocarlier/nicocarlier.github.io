'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Menubar from '@radix-ui/react-menubar';
import { FiExternalLink } from 'react-icons/fi';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Menubar.Root className="MenubarRoot flex justify-center border-b border-gray-200 bg-white/30 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-screen-md w-full px-4 md:px-0 flex items-center h-14 text-gray-700">
        <Menubar.Menu>
          <Link
            href="/"
            className={`MenubarTrigger px-3 hover:text-gray-900 transition-colors duration-200 ${
              pathname === '/'
                ? 'text-gray-900 font-semibold border-b-2 border-gray-900 pb-1'
                : 'text-gray-700'
            }`}
          >
            Nico Carlier
          </Link>
        </Menubar.Menu>

        <Menubar.Menu>
          {/* <Link
            href="/life"
            className={`MenubarTrigger px-3 hover:text-gray-900 transition-colors duration-200 ${
              pathname.startsWith('/life')
                ? 'text-gray-900 font-semibold border-b-2 border-gray-900 pb-1'
                : 'text-gray-700'
            }`}
          >
            Life
          </Link> */}
        </Menubar.Menu>

        <div className="flex items-center ml-auto space-x-4">
          <a
            href="https://github.com/nicocarlier"
            target="_blank"
            rel="noopener noreferrer"
            className="MenubarTrigger px-3 hover:text-gray-900 flex items-center gap-1"
            aria-label="GitHub (opens in new tab)"
          >
            GitHub
            <FiExternalLink className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/nicholas-carlier/"
            target="_blank"
            rel="noopener noreferrer"
            className="MenubarTrigger px-3 hover:text-gray-900 flex items-center gap-1"
            aria-label="LinkedIn (opens in new tab)"
          >
            LinkedIn
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Menubar.Root>
  );
};

export default Navbar;
