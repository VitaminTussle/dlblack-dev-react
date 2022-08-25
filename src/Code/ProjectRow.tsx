import React, { FC } from 'react';
import { ProjectRowProps } from './types';

const ProjectRow: FC<ProjectRowProps> = ({data}) => {
    return (
        <tr>
            <td className='border-solid border-2 border-cyan-600 text-center' style={{ width: '10%' }}>
                {data.name}
            </td>
            <td className='border-solid border-2 border-cyan-600 text-center' style={{ width: '10%' }}>
                {/* <img src={require(data.image)} /> */}
            </td>
            <td
                className='border-solid border-2 border-cyan-600 text-center'
                style={{
                    width: '10%',
                    color: data.status === 'Complete!'
                        ? '#4ade80' // tailwind green 400
                        : data.status === 'Ongoing'
                        ? '#facc15' // tailwind yellow 400
                        : '#f87171' // tailwind red 400
                }}
            >
                {data.status}
            </td>
            <td className='border-solid border-2 border-cyan-600 text-center w-1/2'>
                {data.description}
            </td>
            <td className='border-solid border-2 border-cyan-600 text-center' style={{ width: '10%' }}>
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
            </td>
            <td className='flex-col border-solid border-2 border-cyan-600 text-center items-center' style={{ width: '10%' }}>
                {
                    Array.isArray(data.link)
                        ? data.link.map((l, ind, arr) => (
                            <div className='flex flex-col mx-2'>
                                <a href={l.link} className='flex flex-row items-center hover:underline'>
                                    <div className='w-1/2'>
                                        <img src={require('../assets/github_logo_white.png')} />
                                    </div>
                                    <div className='w-1/2'>
                                        {l.label}
                                    </div>
                                </a>
                                {ind !== arr.length - 1 && <div className='w-full border border-white my-4' />}
                            </div>
                        ))
                        : (<div className='w-1/2 m-auto'>
                            <a href={data.link}>
                                <img src={require('../assets/github_logo_white.png')} />
                            </a>
                          </div>)
                }
            </td>
        </tr>
    );
};

export default ProjectRow;