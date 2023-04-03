import React, { useState } from 'react';
import Link from '../Link/LInk';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)



    const routes = [
        {
            id: 1,
            name: 'Homepage',
            path: '/'
        },
        {
            id: 2,
            name: 'About Us',
            path: '/about'
        },
        {
            id: 3,
            name: 'Services',
            path: '/services'
        },
        {
            id: 4,
            name: 'Contact Us',
            path: '/contact'
        },
        {
            id: 5,
            name: 'FAQs',
            path: '/faqs'
        }
    ];



    return (
        <nav className='bg-purple-400 px-5'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {open === true ?
                        <XMarkIcon className="h-6 w-6 text-blue-500" /> :
                        <Bars3Icon className="h-6 w-6 text-blue-500" />
                    }
                </span>

            </div>
            <ul className={`md:flex absolute md:static duration-500 px-12 py-3 rounded-sm bg-purple-400 ${open ? 'top-5' : '-top-36'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }

            </ul>


        </nav>
    );
};

export default Navbar;