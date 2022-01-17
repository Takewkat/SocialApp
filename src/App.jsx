import React from 'react';
import { Routes, Route} from 'react-router-dom';

import AuthPage from './components/auth/authpage';
import HeaderContainer from './components/header/HeaderContainer';
import Nav from './components/nav/Nav';
import ProfileContainer from './components/Profile/Profile-container';
import UsersContainer from './components/users/Users-container';
import Dialogs from './components/dialogs/Dialogs';
import Settings from './components/settings/Settings'

import './App.css';

function App() {
  //debugger
  return (
    <div className="grid">
      <HeaderContainer />

      <aside className="aside">
        <div className="aside__sticky">
          <Nav />
        </div>
      </aside>
      <main className="main">
      <Routes>
        <Route
          path="/profile/*"
          element={ <ProfileContainer /> }
        />
        <Route
            path="/login"
            render={ () => <AuthPage/> }
        />
        <Route
          path="/users"
          element={ <UsersContainer /> }
        />
        <Route
          path="/dialogs"
          element={ <Dialogs /> }
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
