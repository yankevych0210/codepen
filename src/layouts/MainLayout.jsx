import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { GoMessage } from '../components/GoMessage/GoMessage';
import { Header } from '../components/Header/Header';

export const MainLayout = ({ children, className }) => {
  return (
    <div className={className}>
      <GoMessage />
      <Header />
      <main>{children}</main>
      <Footer />
      <div id="popups"></div>
    </div>
  );
};
