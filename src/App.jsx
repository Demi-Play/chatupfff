import React from 'react';
import './App.css'
import MainWrapp from './components/UI/MainWrapp'
import AuthProvider from './components/auth-provider/AuthProvider';

function App() {

  return (
    <>
      {/* <MainWrapp /> */}
      <AuthProvider />
    </>
  )
}

export default App
