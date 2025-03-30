import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="overallMar">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
