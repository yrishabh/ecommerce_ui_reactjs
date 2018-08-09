import React, { Component } from 'react';
import './App.css';
import UserMenu from './component/usermenu';
import Logo from './component/logo';
import Nav from './component/nav';
//import LatestProducts from './component/latestproducts';
//import Service from './component/service';
//import Brand from './component/brand';
import FooterTop from './component/footer1';
import FooterBottom from './component/footer2';
import Main from './component/main'

class App extends Component {
  render() {
    return (
      <div>
        <UserMenu />
        <Logo />
        <Nav />
        <Main /> 
        <FooterTop/>
        <FooterBottom/>
      </div>
    );
  }
}

export default App;
