import React from 'react'
import Logo from '../../assets/exchange.svg'

const NavBar = () => {
    return (
        <div className='bg-black'>
            <img src={Logo} height={32} width={32} />
        </div>
    )
}

export default NavBar