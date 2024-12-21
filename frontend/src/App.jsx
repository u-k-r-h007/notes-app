import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Intro from './pages/Intro/Intro';

function App() {


  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Intro />} />
  <Route path='/dashboard'  element={ <Home /> } />
  <Route path='/login'  element={ <Login /> } />
  <Route path='/signup'  element={ <SignUp /> } />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
