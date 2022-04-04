import React from 'react';
import './App.css';

import { useAppSelector, useAppDispatch } from './app/hooks';
import { login, logout } from './features/loginManager/loginSlice';

import { Home, Login } from './app/components/home/Home';

export function App() {
  const logged = useAppSelector((state) => state.loginManager.value);
  
  if (!logged) {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
  
  return (
    <div className="App">
        <Home />
      </div>
  );
}

export default App;
