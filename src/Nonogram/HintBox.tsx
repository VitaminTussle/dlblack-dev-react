import React, { FC } from 'react';
import { HintBoxProps } from './types';

const HintBox: FC<HintBoxProps> = ({ data }) => {
    return (
        <div className={'flex m-1 bg-slate-700 justify-center align-center ' + (data.direction === 'vertical' ? 'flex-col h-40 w-8 rounded-t-md' : 'flex-row h-8 w-40 rounded-l-md')}>
            {data.hint.map((num, ind) => (
                <p className={'flex justify-center align-center margin-auto' + (data.direction === 'horizontal' ? ' mr-2' : '')} key={'num' + ind}>
                    {num}
                </p>
            ))}
        </div>
    );
}

export default HintBox;