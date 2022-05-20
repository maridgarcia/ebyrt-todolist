/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" component={Login} />
      </Routes>
    </UserProvider>
  );
}

export default App;
