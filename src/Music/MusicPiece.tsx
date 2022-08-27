import React, { FC, useEffect, useState } from 'react';
import { MusicPieceProps } from './types';
import { images } from '../utils/images';
import { pdfs } from '../utils/pdfs';
import {RiDownload2Fill} from 'react-icons/ri';

const colors = {
    'Original': '#4ade80',    // tailwind green 400
    'Arrangement': '#facc15', // tailwind yellow 400
    'Reimagining': '#2dd4bf'  // tailwind teal 400
};

const getWindowWidth = () => {
    return window.innerWidth;
};

const MusicPiece: FC<MusicPieceProps> = ({ data }) => {
    const [w, setW] = useState(getWindowWidth());

    useEffect(() => {
        function handleWindowResize() {
            setW(getWindowWidth());
        }
      
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className='flex flex-col my-8'>
            <div className='flex flex-row justify-between text-3xl mb-2'>
                <p className='flex font-semibold'>
                    {data.title}
                </p>
                <p className='flex' style={{color: colors[data.origin]}}>
                    {data.origin}
                </p>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col lg:flex-row'>
                    <span className='mb-2 lg:mb-0'>
                        <span className='font-semibold'>
                            Key:&nbsp;
                        </span>
                        {data.key}
                    </span>
                    {w >= 1024 && ' | '}
                    <a href={data.link} target='_blank' rel='noreferrer' className='flex flex-row items-center hover:underline'>
                        <img src={images['musescore_logo_white.png']} alt='musescore logo' className='w-8 mr-1 ml-0 lg:ml-1' />
                        <p className='flex'>
                            View and listen on Musescore
                        </p>
                    </a>
                </div>
                {data.download &&
                    <a
                        href={pdfs[data.download]}
                        className='flex flex-row border-2 border-white rounded-md px-2 h-fit items-center cursor-pointer'
                        download={data.title}
                    >
                        <RiDownload2Fill className='mr-2' />
                        Download PDF
                    </a>
                }
            </div>
        </div>
    );
}

export default MusicPiece;