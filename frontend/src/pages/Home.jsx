import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'
import Bros from '../assets/Hero/Handshake_Light.png'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
        <header>
            <Navbar />
        </header>
        <section className="hero relative flex justify-between px-16 py-8">
          <div className="flex flex-col gap-6 max-w-lg items-start z-10">
            <div className="small-text w-[30ch] tracking-tighter">
              <p>Bridge the gap between employees and HR. One platform for all your workplace conversations</p>
            </div>
            <div className="heading">
              <h1 className='text-4xl w-[12ch] font-bold text-left'>Making A Difference:</h1>
            </div>
            <div className="description">
              <h1 className='text-4xl w-[15ch] font-bold text-blue-400 text-left'>Communication Starts with You</h1>
            </div>
          </div>
          <div className="">
            <div className="text-4xl font-rubik w-[12ch] text-right relative top-10">
              <p className='capitalize font-bold'>A small act of <span className='text-blue-400 underline'>communication</span> is a big <span className='text-blue-400 underline'>difference</span> in someone's work life.</p>
            </div>
          </div>
          <img 
            src={Bros} 
            alt="" 
            className="w-[550px] absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 opacity-80 pointer-events-none"
            style={{zIndex: 1}}
          />
        </section>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Home