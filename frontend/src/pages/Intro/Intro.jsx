import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function Intro() {
  return (
    <center>
        <Navbar />
        <h1 className='mt-48 text-3xl'>Welcome to Notes Application Please login to start the application If not a user Please Signup </h1> 

       <div className='flex gap-10 justify-center mt-20'>
       <button> <Link to={"/login"} className='bg-blue-500 hover:bg-transparent text-white hover:text-blue-500 hover:border-blue-500 font-bold py-2 px-4 rounded'>Go to Login...</Link></button>
       <button> <Link to={"/Signup"} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Go to Signup...</Link></button>
       </div>
    </center>
  )
}

export default Intro