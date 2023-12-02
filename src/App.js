import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import  { CURRENT_DATE_STRFORMAT, EXPIRE_DATE } from './constants/CONSTANTS';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import AppRouter from './components/AppRouter/AppRouter';
import { addAuthAction } from './store/authReducer';

import './styles/App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('accessToken') && CURRENT_DATE_STRFORMAT < EXPIRE_DATE ) {
      dispatch(addAuthAction(true))
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />   
      </BrowserRouter>
      <Footer />  
    </div>
  );
}

export default App;
