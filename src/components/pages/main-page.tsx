import React from 'react';
import Hero from '../hero/hero';
import NewProductsMainContainer from '../new-products-main/new-products-main-container';
import History from '../history/history';
// import ReviewListContainer from '../review-list/review-list-container';
import Demonstration from '../demonstration/demonstration';
import ContactUs from '../contact-us/contact-us';

const MainPage = () => {
  return (
    <div>
      <Hero />
      <NewProductsMainContainer />
      <History />
      {/*<ReviewListContainer />*/}
      <Demonstration />
      <ContactUs />
    </div>
  );
};

export default MainPage;
