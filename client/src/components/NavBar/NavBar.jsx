import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/colorkit.svg';

const NavBar = () => {
    return (
        <nav className='flex justify-between px-12 py-7 items-center border-solid sticky top-0 z-50'>
            <div>
                <NavLink to='/' className='flex flex-row justify-between items-center gap-4'>
                    <img src={Logo} alt="" height={35} width={35} />
                    <span className='text-[#0E3969] font-medium text-2xl'>FileSA</span>
                </NavLink>
            </div>
            <div className='flex gap-10'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `hover:text-[#145692] ${isActive ? 'text-[#0E3969] font-semibold' : 'text-black'}`
                    }
                >
                    <span>Accueil</span>
                </NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive }) =>
                        `hover:text-[#145692] ${isActive ? 'text-[#0E3969] font-semibold' : 'text-black'}`
                    }
                >
                    <span>A propos</span>
                </NavLink>
                <NavLink
                    to='/contact'
                    className={({ isActive }) =>
                        `hover:text-[#145692] ${isActive ? 'text-[#0E3969] font-semibold' : 'text-black'}`
                    }
                >
                    <span>Contact</span>
                </NavLink>
            </div>
            <div className='flex'>
                <NavLink to=''>
                    <button className='p-3 border-none bg-[#0E3969] text-white rounded outline-none'>Contribuer</button>
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
