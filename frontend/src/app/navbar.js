import React from 'react'

import Image from 'next/image'
const Navbar = () => {
    return (
        <nav className="">
            <div className=''>
                <a href="/" className=''>
                    <Image src="/logo.png" alt="Brand logo" width={24} height={24} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar; 