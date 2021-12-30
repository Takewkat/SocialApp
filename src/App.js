import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Header from "./components/header/Header";
import Nav from './components/nav/Nav';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/users/Users-container';
import Dialogs from './components/dialogs/Dialogs';
import Settings from './components/settings/Settings'

import './App.css';

function App(props) {
  //debugger
  return (
    <div className="grid">
      <Header />

      <aside className="aside">
        <div className="aside__sticky">
          <Nav state = {props.state.nav} />
        </div>
      </aside>
      <main className="main">
      <Routes>
        <Route
          path="/profile"
          element={ <Profile state = {props.state.profilePage} /> }
        />
        <Route
          path="/users"
          element={ <UsersContainer state = {props.state.usersPage} /> }
        />
        <Route
          path="/dialogs"
          element={ <Dialogs state = {props.state.dialogsPage} /> }
        />
        <Route
          path="/settings"
          element={ <Settings /> }
        />
      </Routes>   
      </main>
      <footer className="footer"></footer>
    </div>
  );
}


export default App;
