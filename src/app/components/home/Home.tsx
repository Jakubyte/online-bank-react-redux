import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { login, logout } from '../../../features/loginManager/loginSlice';

import { IItem, ItemProps } from '../nav/items.decl';
import { Nav } from '../nav/Nav';


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

    const nav: ItemProps = {
        items: [{ name: "log out", onClick: () => { handleLogout() } }]
    };

  return (
      <div>
          <p>Home page</p>
          <Nav items={ nav.items }/>
      </div>
  );
}
