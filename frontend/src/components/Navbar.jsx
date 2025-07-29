import { Link } from 'react-router-dom';
import bell from '../assets/Navbar/Bell_pin_fill.png';
import user from '../assets/Navbar/User_fill.png';

const Navbar = () => {
  return (
    <header className='flex justify-around mt-10 mb-14 font-mono'>
      <div className="border-3 border-blue-500 rounded-full px-3 py-2 flex gap-2 cursor-pointer transition delay-200 ease hover:bg-blue-400">
       <span><img src={user} alt="" className='w-7'/></span> <Link to="" className='text-blue-500 font-black text-lg'>Login</Link>
      </div>
      <nav className="">
        <ul className="flex justify-center gap-20 text-blue-500">
          <li className="items1 cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-blue-100 rounded-3xl px-3 py-2">Events</li>
          <li className="items2 cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-blue-100 rounded-3xl px-3 py-2">Our Mission</li>
          <li className="items3 cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-blue-100 rounded-3xl px-3 py-2">Tickets</li>
          <li className="items4 cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-blue-100 rounded-3xl px-3 py-2">Blog</li>
        </ul>
      </nav>
      <div className="notification">
        <img src={bell} alt="" className='w-8'/>
      </div>
    </header>
  )
}

export default Navbar