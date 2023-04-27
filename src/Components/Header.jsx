 import React from 'react';
import logo from '../../public/grontho-bilash-log.png'
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';

const Header = () => {
    return (

        <div className="navbar bg-sky-300 px-10 py-4 sticky top-0">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">
        <img className='w-14' src={logo} alt="" />
    </a>
  </div>
  <div className=" ">
    <ul className="flex md:flex-row  items-center sm:flex-col  px-1">
    <Link className='mr-6 text-xl hover:text-yellow-400   ' to='/'>Home</Link>
    <Link className='mr-6 text-xl hover:text-yellow-400 'to='/shop'>Shop</Link>
    <Link className='mr-6 text-xl hover:text-yellow-400 ' to='/blog'>Blog</Link>
    <Link className='mr-6 text-xl hover:text-yellow-400 ' to='/login'>Login</Link>
    
    <Link className='mr-6 text-xl ' to='/cart'><FaCartArrowDown className='h-8 w-8 pr-2 text-yellow'/> </Link>

    
    </ul>
  </div>
</div>
        
    );
};

export default Header;

