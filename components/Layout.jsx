import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="bg-white">
    <Header />
    { children }
    <Footer />
  </div>
);

export default Layout;
