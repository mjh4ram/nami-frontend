import React, { useState, useEffect } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Socket from './classes/socketclass';
import UserStore from './classes/userstore';
import Landingpage from './components/Landing/LandingPage';
import About from './components/About/About';
import FooterSec from './components/Footer';
import Login from './components/LogIn/LogIn';


function App() {

  useEffect(() =>{
    // app마운트시 실행
    if (sessionStorage.getItem('access_token') && sessionStorage.getItem('username')) {
      Socket.socketConnect(sessionStorage.getItem('access_token'));
      if (sessionStorage.getItem('chats')) {
        Socket.allChats = JSON.parse(sessionStorage.getItem('chats'));
      }
      UserStore.username = sessionStorage.getItem('username');
      UserStore.isLoggedIn = true;
    }

    // unmount될시 socket을 닫아준다
    return () => {
      console.log("websocket disconnected");
      Socket.socket.close();
    }
  },[]);

  return (
    <div>
        <Layout>
            <Header title={<div class="logo-name">nami</div>}>
                <Navigation>
                    <a href="#">Home</a>
                    <a href="#">Chart</a>
                    <a href="#">Contact</a>
                    <p>
                      <button class="loginbutton">Log in</button>
                    </p>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Drawer>
            <Content>
              <Landingpage/>
              <FooterSec/>
            </Content>
        </Layout>
    </div>
  );

}

export default App;
