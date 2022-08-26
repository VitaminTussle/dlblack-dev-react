import React from 'react';
import Navbar from '../Navbar/Navbar';
import MusicPiece from './MusicPiece';
import { images } from '../utils/images';
import { MusicPieceObj } from './types';

const Music = () => {
    // this array will eventually be fetched from an API
    const pieces: MusicPieceObj[] = [
        {
            title: 'Where is home?',
            key: 'B Major',
            origin: 'Original',
            link: 'https://musescore.com/user/29186179/scores/8540855',
            download: 'where_is_home.pdf'
        },
        {
            title: 'Sociopath',
            key: 'A Major',
            origin: 'Arrangement',
            link: 'https://musescore.com/user/29186179/scores/5156009',
            download: 'sociopath.pdf'
        },
        {
            title: 'Mysterious Something',
            key: 'F Minor',
            origin: 'Original',
            link: 'https://musescore.com/user/29186179/scores/5828973',
            download: 'mysterious.pdf'
        },
        {
            title: 'Mappy Theme',
            key: 'Eb Major',
            origin: 'Arrangement',
            link: 'https://musescore.com/user/29186179/scores/5156001',
            download: 'mappy.pdf'
        },
        {
            title: 'Gargoyles Theme',
            key: 'B Minor',
            origin: 'Arrangement',
            link: 'https://musescore.com/user/29186179/scores/5828986',
            download: 'gargoyles.pdf'
        },
    ];

    return (
        <div className='mb-16'>
            <Navbar/>
            <div className='flex w-full'>
                <div className='flex flex-col mr-32 ml-32 mt-16 h-full w-full text-white text-xl'>
                    <div className='flex items-center justify-between mb-8'>
                        <p className='text-5xl'>
                            Sheet Music
                        </p>
                        <a href='https://musescore.com/user/29186179' target='_blank' className='flex flex-row items-center hover:underline'>
                            <img src={images['musescore_logo_white.png']} className='flex w-12 mr-4' />
                            <p className='flex'>
                                @DeuceBlack
                            </p>
                        </a>
                    </div>
                    {pieces.map((p, ind, arr) => (
                        <div className='w-full items-center'>
                            <MusicPiece data={p} />
                            {ind < arr.length - 1 && (
                                <div className='border border-slate-700 w-4/5 m-auto' />
                            )}
                        </div>
                    ))}
                    <div className='flex flex-col my-8'>
                        <p className='text-5xl mb-8'>
                            Produced Songs
                        </p>
                        <p className='text-3xl'>
                            Coming soon!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;