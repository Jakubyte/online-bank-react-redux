import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { login, logout } from '../../../features/loginManager/loginSlice';



import { Cards } from '../cards/Cards';

import styles from './Home.module.css';

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

    const accounts = [
        {
            name: "Test1",
            content: [
                { name: "Account number", content: "00-00-00" },
                { name: "Balance", content: 2000 }
            ],
            footer: [
                { name: "Transfer", content: "Transfer" },
                { name: "Settings", content: "Settings"}
            ]
        },
        {
            name: "Test2",
            content: [
                { name: "Account number", content: "00-00-01" },
                { name: "Balance", content: 350 }
            ],
            footer: [
                { name: "Transfer", content: "Transfer" },
                { name: "Settings", content: "Settings"}
            ]
        }
    ];

  return (
      <div className={styles.card}>
          <Cards cards={accounts} />
      </div>
  );
}
