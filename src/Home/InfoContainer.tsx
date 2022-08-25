import React, { FC, useEffect, useState } from 'react';
import { InfoContainerProps } from './types';
import { BsCaretDown, BsCaretUp } from 'react-icons/bs';
import './InfoContainer.css';

const InfoContainer: FC<InfoContainerProps> = ({label, content}) => {
    const [contracted, setContracted] = useState(true);
    const [expandableClass, setExpandableClass] = useState('expandable contracted');
    useEffect(() => {
        setExpandableClass(contracted ? 'contracted' : 'expanded');
    }, [contracted]);

    return (
        <div className='mb-8'>
            <div
                className='flex flex-row text-5xl justify-between items-center cursor-pointer border-2 border-white rounded-md p-4'
                onClick={() => {setContracted(!contracted)}}
            >
                {label}
                {contracted ? <BsCaretDown /> : <BsCaretUp />}
            </div>
            <div className='expandable-container'>
                <div className={'expandable ' + expandableClass}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default InfoContainer;