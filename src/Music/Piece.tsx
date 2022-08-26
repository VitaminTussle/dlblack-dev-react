import React, { FC } from 'react';
import { PieceProps } from './types';
import { images } from '../utils/images';
import { pdfs } from '../utils/pdfs';
import {RiDownload2Fill} from 'react-icons/ri';

const colors = {
    'Original': '#4ade80',    // tailwind green 400
    'Arrangement': '#facc15', // tailwind yellow 400
    'Reimagining': '#2dd4bf'  // tailwind teal 400
}

const Piece: FC<PieceProps> = ({ data }) => {
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
                <div className='flex flex-row'>
                    <span className='font-semibold'>
                        Key:&nbsp;
                    </span>
                    {data.key}
                    {' '}|{' '}
                    <a href={data.link} target='_blank' className='flex flex-row items-center hover:underline'>
                        <img src={images['musescore_logo_white.png']} className='w-8 mx-1' />
                        <p className='flex'>
                            View and listen on Musescore
                        </p>
                    </a>
                </div>
                {data.download &&
                    <a
                        href={pdfs[data.download]}
                        className='flex flex-row border-2 border-white rounded-md px-2 items-center cursor-pointer'
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

export default Piece;