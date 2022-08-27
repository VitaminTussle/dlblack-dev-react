import React, { FC } from 'react';
import { WritingPieceProps } from './types';
import { pdfs } from '../utils/pdfs';
import {RiDownload2Fill} from 'react-icons/ri';

const colors = {
    'Short Story': '#4ade80',  // tailwind green 400
    'Poem': '#facc15',         // tailwind yellow 400
    'Flash Fiction': '#2dd4bf' // tailwind teal 400
}

const WritingPiece: FC<WritingPieceProps> = ({ data }) => {
    return (
        <div className='flex flex-col my-8'>
            <div className='flex flex-row justify-between text-3xl mb-2'>
                <p className='flex font-semibold italic'>
                    {data.title}
                </p>
                <p className='flex text-right min-w-max' style={{color: colors[data.type]}}>
                    {data.type}
                </p>
            </div>
            <div className='flex flex-row justify-between'>
                <p>
                    {data.synopsis}
                </p>
                {data.download &&
                    <a
                        href={pdfs[data.download]}
                        className='flex flex-row border-2 border-white rounded-md px-2 ml-2 min-w-max h-fit items-center cursor-pointer'
                        download={data.title}
                    >
                        <RiDownload2Fill className='mr-2' />
                        Download PDF
                    </a>
                }
            </div>
            {data.warning &&
                <div className='text-red-400'>
                    <span className='font-semibold'>
                        Warning:&nbsp;
                    </span>
                    {data.warning}
                </div>
            }
        </div>
    );
}

export default WritingPiece;