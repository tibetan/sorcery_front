import React from 'react';
import Hero from '../widgets/hero/hero';
import NewProductsMainContainer from '../widgets/new-products-main/new-products-main-container';
import History from '../widgets/history/history';
import ReviewListContainer from '../widgets/review-list/review-list-container';
import Demonstration from '../widgets/demonstration/demonstration';
import ContactUs from '../widgets/contact-us/contact-us';

const MainPage = () => {
  return (
    <div>
      <Hero />
      <NewProductsMainContainer />
      <History />
      <ReviewListContainer />
      <Demonstration />
      <ContactUs />
    </div>
  );
};

export default MainPage;
