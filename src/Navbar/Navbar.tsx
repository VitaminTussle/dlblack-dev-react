import React from 'react';
import { Link } from 'react-router-dom';
import { RiDownload2Fill } from 'react-icons/ri';
import { images } from '../utils/images';
import { pdfs } from '../utils/pdfs';

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center bg-slate-700 text-white px-16 py-4'>
            <div className='flex h-16'>
                <Link to='/'>
                    <img src={images['logo.png']} alt='dlblack.dev logo' className='flex h-16' />
                </Link>
            </div>
            <div className='flex flex-row justify-between text-2xl w-2/5 lg:w-fit overflow-x-auto pb-2 lg:pb-0'>
                <Link to='/code' className='flex mr-16'>
                    Code
                </Link>
                <Link to='/music' className='flex mr-16'>
                    Music
                </Link>
                <Link to='/writing' className='flex mr-16'>
                    Writing
                </Link>
                <Link to='/pockets' className='flex mr-16'>
                    Pockets
                </Link>
                <Link to='/nonogram' className='flex mr-16'>
                    Nonogram
                </Link>
                <a
                    href={pdfs['resume.pdf']}
                    download={'ResumeDustinBlack.pdf'}
                    className='flex border-2 border-white rounded-md px-2 items-center cursor-pointer'
                >
                    <RiDownload2Fill className='mr-2' />
                    Resume
                </a>
            </div>
        </div>
    );
};

export default Navbar;