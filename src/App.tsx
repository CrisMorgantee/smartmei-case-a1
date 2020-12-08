import React from 'react'
import { ToastContainer } from 'react-toastify'
import Home from './pages'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Home />
    </>
  )
}

export default App
