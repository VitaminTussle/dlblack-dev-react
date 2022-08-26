import React, { FC } from 'react';
import { ProjectProps } from './types';
import { images } from '../utils/images';

const colors = {
    'Complete!': '#4ade80', // tailwind green 400
    'Ongoing': '#facc15',   // tailwind yellow 400
    'Terminated': '#f87171' // tailwind red 400
}

const Project: FC<ProjectProps> = ({data}) => {
    const imageName = data.image ?? 'sadface.png';
    return (
        <div className='flex flex-row items-center my-8'>
            <div className='flex mr-8' style={{ width: '12.5%' }}>
                <img src={images[imageName]} alt={imageName} />
            </div>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row justify-between text-3xl mb-2'>
                    <p className='font-semibold'>{data.name}</p>
                    <p
                        style={{
                            width: '10%',
                            textAlign: 'right',
                            color: colors[data.status]
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
                    <div>
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
                        <a href={data.link} target='_blank' rel='noreferrer' className='w-10'>
                            <img src={images['github_logo_white.png']} alt='github logo' className='w-10' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;