
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <motion.main 
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
