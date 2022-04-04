import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { login, logout } from '../../../features/loginManager/loginSlice';


import { Nav } from '../nav/Nav';
import { Cards } from '../cards/Cards';


export function Login() {
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        dispatch(login());
    }

  return (
      <div>
          <p>Please log in</p>
          <button onClick={ () => {handleLogin()}}>Log in</button>
      </div>
  );
}

export function Home() {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    const nav = [
        { name: "log out", onClick: () => { handleLogout() } },
        { name: "hello world", onClick: () => { console.log("Clicked")}, onClickEvent: (e: any) => { console.log(e.target)} }
    ]

    const accounts = [
        { name: "Test1", balance: 2000, account_number: "000-000-000" },
        { name: "Test2", balance: 350, account_number: "000-000-001" },
    ];

  return (
      <div>
          <p>Home page</p>
          <Nav items={nav} />
          <Cards cards={accounts}/>
      </div>
  );
}
