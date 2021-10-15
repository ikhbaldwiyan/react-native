import React from 'react';
import BottomNavigation from '../components/BottomNavigation';

const Layout = ({children}) => {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
};

export default Layout;
