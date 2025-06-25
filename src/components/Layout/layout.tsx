import React, { ReactNode, useEffect } from 'react';
import { Metadata } from 'next';
import Navbar from '../Navbar';
import { useRouter } from 'next/router';
import Footer from '../Footer';
import { useUIStore } from '@/store';

interface LayoutProps {
  children: ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children }) => {

  const theme = useUIStore((state) => state.theme);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const { pathname } = useRouter();


  
  return (
    <main className='bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white transition-colors duration-300 relative h-full '>

      <Navbar />
  
      {children}
  
      <Footer />
    </main>
  );
};

export default Layout;
