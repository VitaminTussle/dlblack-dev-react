import React from 'react';

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center bg-slate-700 text-white p-4'>
            <div className='flex h-16'>
                <img src={require('../assets/logo.png')} />
            </div>
            <div className='flex flex-row justify-between text-xl'>
                <div className='flex mr-8'>
                    Projects
                </div>
                <div className='flex mr-8'>
                    Pockets
                </div>
                <div className='flex'>
                    Resume
                </div>
            </div>
        </div>
    );
};

export default Navbar;