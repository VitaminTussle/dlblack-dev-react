import React, { FC } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { CellProps } from './types';

const Cell: FC<CellProps> = ({ data }) => {
    return (
        <div
            className={
                'flex h-8 w-8 m-1 border border-solid border-white rounded-sm'
                    + (data.checked === 'unchecked' ? ' cursor-pointer' : '')
                    + (data.checked === 'filled' ? ' bg-white' : '')
            }
            onClick={data.onClick}
        >
            {data.checked === 'marked' && (
                <RiCloseFill className='flex m-auto' size={32} />
            )}
        </div>
    );
}

export default Cell;