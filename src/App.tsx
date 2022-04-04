import React from 'react';
import './App.css';

import { useAppSelector, useAppDispatch } from './app/hooks';
import { login, logout } from './features/loginManager/loginSlice';
import { select } from './features/navManager/navSlice';

import { Home, Login } from './app/components/home/Home';
import { Nav } from './app/components/nav/Nav';

import styles from './app/components/home/Home.module.css';
import { displayPartsToString } from 'typescript';

export function App() {
  const logged = useAppSelector((state) => state.loginManager.value);
  const selected = useAppSelector((state) => state.navManager.value);
  const dispatch = useAppDispatch();

      const handleLogout = () => {
        dispatch(logout());
      }
  
  const handleSelect = (e: any) => {
    console.log(selected + " | " + e.currentTarget.innerText);
    const selectedElements = document.getElementsByClassName('selected');
    if (selectedElements[0]) {
      selectedElements[0].classList.remove('selected');
    }

    e.target.classList.add('selected');
    console.log(e);

    dispatch(select(e.target.innerText));
  }

    const nav = [
      { name: "log out", onClick: () => { handleLogout() } },
      { name: "hello world", onClickEvent: (e: any) => { handleSelect(e) } },
      { name: "Test nav", onClickEvent: (e: any) => { handleSelect(e) } },
      { name: "Test nav 2", onClickEvent: (e: any) => { handleSelect(e) } }
    ]
  
  if (!logged) {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
  
  return (
    <div className="App">
      <div className={styles.navbar}>
        <Nav items={nav} />
      </div>

      <Home />
    </div>
  );
}

export default App;
