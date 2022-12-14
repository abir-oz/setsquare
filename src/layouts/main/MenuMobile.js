import React, { useState } from 'react';
import { AiFillCloseCircle, AiOutlineMenuFold } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import menuConfig from './MenuConfig';

const MenuMobile = () => {
    const [showBurger, setShowBurger] = useState(false);
    const [navClass, setNavClass] = useState('right-full');

    function toggleNav(e) {
        setShowBurger(!showBurger);
        if (showBurger) {
            setNavClass('right-0');
        } else {
            setNavClass('right-full');
        }
    }
    return (
        <nav role="navigation"
            className="flex justify-between items-center top-0 px-4 bg-white z-40  lg:hidden py-3 font-display relative">

            <div className='mx-auto'>
                <Link to="/">
                    <img src={logo} alt="logo" className="h-28" />
                </Link>
            </div>

            <button className="absolute right-7" id="nav_open" onClick={toggleNav}>
                <AiOutlineMenuFold className='text-2xl' />
            </button>

            <ul id="nav_content"
                className={`absolute top-0 h-screen w-full ${navClass} transition-all duration-500 overflow-hidden bg-white -mt-[67px]`}>
                <div className="absolute grid grid-cols-3 w-full place-items-center pt-4">
                    <button className="col-start-3 col-end-4 opacity-50 ml-8 p-2 border border-accent2 rounded-md" id="nav_close" onClick={toggleNav}>
                        <AiFillCloseCircle className='text-2xl' />
                    </button>
                </div>

                <div className="text-2xl font-bold h-full">
                    <div className="flex flex-col ml-12 mt-20">
                        <div className="inline-block">
                            {menuConfig.map((item, index) => (
                                <li key={index} className="relative z-10 text-xl font-light"><Link to={item.path}
                                    className="inline-block h-full w-full">{item.title}</Link>
                                </li>
                            ))}

                        </div>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default MenuMobile;