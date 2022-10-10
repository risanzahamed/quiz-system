import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link
                        to='/home'
                        aria-label='Home'
                        title='Home'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='/shop'
                        aria-label='Shop'
                        title='Shop'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    >
                        Shop
                    </Link>
                </li>
                <li>
                    <Link
                        to='/about'
                        aria-label='About Us'
                        title='About Us'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    >
                        About Us
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;