import React from 'react';

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between bg-slate-700 text-white p-4'>
            <div className='flex'>
                logo here
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex'>
                    Projects
                </div>
                <div className='flex'>
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