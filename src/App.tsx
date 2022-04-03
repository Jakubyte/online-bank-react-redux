import React from 'react';
import './App.css';

import { Header } from './app/components/header/header'
import { Side } from './app/components/side/side'
import { Content } from './app/components/content/content'
import { Footer } from './app/components/footer/footer'

export function App() {
  return (
    <div className="App">
      <Header />
      <Side />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
