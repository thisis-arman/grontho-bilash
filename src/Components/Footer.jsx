import React from 'react';
import logo from '../../public/grontho-bilash-log.png'

const Footer = () => {
    return (
        <div className='bg-slate-900 md:flex justify-between w-full px-12 '>
            <div className='w-full p-8 text-white'>
                <img className='w-24' src={logo} alt="" />
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, sint quibusdam ab repellat facere corrupti rerum nam perspiciatis commodi pariatur, labore necessitatibus numquam aut sequi. Quos porro quia inventore libero.</p>

            </div>
            <div className='w-full p-8 text-white'>
                <h2 className='text-2xl '>Useful Links</h2>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Blogs</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='w-full p-8 text-white'>
                <h2 className='text-2xl '>Useful Links</h2>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Blogs</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='w-full p-8 text-white'>
                <h2 className='text-2xl'>Address</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, laborum.</p>
            </div>
            
        </div>
    );
};

export default Footer;