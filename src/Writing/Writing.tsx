import React from 'react';
import WritingPiece from './WritingPiece';
import Navbar from '../Navbar/Navbar';
import { WritingPieceObj } from './types';

const Writing = () => {
    // this array will eventually be fetched from an API
    const pieces: WritingPieceObj[] = [
        {
            title: 'Chocolate Milk Day',
            type: 'Short Story',
            synopsis: 'A pair of college friends/roommates enjoy the little things in life, including a trip down memory lane to the place they met.',
            warning: null,
            download: 'chocolate_milk_day.pdf'
        },
        {
            title: 'Edible Flora',
            type: 'Flash Fiction',
            synopsis: 'A faceless narrator contemplates the fragility of nature.',
            warning: null,
            download: 'edible_flora.pdf'
        },
        {
            title: 'Ant Farm',
            type: 'Short Story',
            synopsis: 'Two identity-less humans in a dystopian future discover the nature of their world and the fates of many of those that came before them.',
            warning: 'This story features a suicide as a plot point. Reader discretion is advised.',
            download: 'ant_farm.pdf'
        },
        {
            title: 'Momentum Malediction',
            type: 'Poem',
            synopsis: null,
            warning: null,
            download: 'momentum_malediction.pdf'
        },
        {
            title: 'Ode to Strawberry Jam',
            type: 'Poem',
            synopsis: null,
            warning: null,
            download: 'ode_to_strawberry_jam.pdf'
        },
        {
            title: 'Three',
            type: 'Poem',
            synopsis: null,
            warning: null,
            download: 'three.pdf'
        },
        {
            title: 'Clementine',
            type: 'Poem',
            synopsis: null,
            warning: null,
            download: 'clementine.pdf'
        }
    ];

    return (
        <div className='mb-16'>
            <Navbar/>
            <div className='flex w-full'>
                <div className='flex flex-col mx-16 lg:mx-32 mt-16 h-full w-full text-white text-xl'>
                    <div className='flex items-center justify-between mb-8'>
                        <p className='text-5xl'>
                            Writing Pieces
                        </p>
                    </div>
                    {pieces.map((p, ind, arr) => (
                        <div key={p.title} className='w-full items-center'>
                            <WritingPiece data={p} />
                            {ind < arr.length - 1 && (
                                <div className='border border-slate-700 w-4/5 m-auto' />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Writing;