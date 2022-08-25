import React, { FC } from 'react';
import { ProjectProps } from './types';
import { images } from '../utils/images';

const Project: FC<ProjectProps> = ({data}) => {
    const imageLoc = data.image ?? '../assets/sadface.png';
    const pathPieces = imageLoc.split('/');
    const imageName = pathPieces[pathPieces.length - 1];
    return (
        <div className='flex flex-row items-center mb-8'>
            <div className='flex mr-8' style={{ width: '12.5%' }}>
                <img src={images[imageName]} />
            </div>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-between text-3xl mb-2'>
                    <p className='font-semibold'>{data.name}</p>
                    <p
                        style={{
                            width: '10%',
                            textAlign: 'right',
                            color: data.status === 'Complete!'
                                ? '#4ade80' // tailwind green 400
                                : data.status === 'Ongoing'
                                ? '#facc15' // tailwind yellow 400
                                : '#f87171' // tailwind red 400
                        }}
                    >
                        {data.status}
                    </p>
                </div>
                <div className='mb-2'>
                    <span className='font-semibold'>Description:&nbsp;</span>
                    {data.description}
                </div>
                <div className='flex flex-row justify-between mb-2'>
                    <div className='flex'>
                        <span className='font-semibold'>Technologies:&nbsp;</span>
                        {data.technologies.reduce((prev, curr, ind, arr) => {
                            let construct = prev;
                            if (ind < arr.length - 2) {
                                construct += curr + ', ';
                            } else if (ind === arr.length - 2) {
                                construct += curr + ', and ';
                            } else {
                                construct += curr;
                            }
                            return construct;
                        }, '')}
                    </div>
                    <div className='flex'>
                        <a href={data.link} className='w-10'>
                            <img src={images['github_logo_white.png']} className='w-10' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;