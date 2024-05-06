import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Upper from './pages/main/upper';
import New from './pages/main/new';
import Popular from './pages/main/popular';
import History from './pages/main/history';
import Review from './pages/main/review';
import Demonstration from './pages/main/demonstration';
import ContactUs from './pages/main/contact-us';

const App = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header />
        <Upper />
        <New />
        <Popular />
        <History />
        <Review />
        <Demonstration />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
