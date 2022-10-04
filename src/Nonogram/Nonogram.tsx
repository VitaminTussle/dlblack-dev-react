import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import NonogramGrid from './NonogramGrid';
import { NonogramGridObj } from './types';

const Nonogram = () => {
    const [selectedTab, setSelectedTab] = useState('solve');

    // this array will eventually be fetched from an API
    const grid: NonogramGridObj = {
        key: [
            [false, false, false, true, true, true, true, true, true, true, true, true, true, true, true],
            [false, true, true, false, true, true, true, true, true, true, true, true, true, true, true],
            [true, false, false, true, false, false, false, false, false, false, false, false, false, false, false],
            [true, false, false, true, false, false, false, false, false, true, true, false, false, false, false],
            [false, true, true, false, false, true, false, false, true, false, false, true, false, false, true],
            [true, false, false, false, true, false, true, false, true, false, false, true, false, true, false],
            [true, false, false, false, false, true, false, true, true, false, false, true, true, false, true],
            [true, false, false, false, false, false, true, false, false, true, true, false, false, true, false],
            [true, false, false, false, true, true, true, false, true, false, false, true, false, true, true],
            [true, false, false, true, false, false, false, true, false, true, true, false, true, false, false],
            [true, false, false, true, false, false, false, true, false, true, true, false, true, false, false],
            [true, false, false, false, true, true, true, false, true, false, false, true, false, true, true],
            [true, false, false, false, false, false, true, false, false, true, true, false, false, true, false],
            [true, false, false, false, false, true, false, true, true, false, false, true, true, false, true],
            [true, false, false, false, true, false, true, false, true, false, false, true, false, true, false]
        ]
    };

    return (
        <div className='mb-16'>
            <Navbar />
            <div className='flex w-full'>
                <div className='flex flex-col mx-16 xl:mx-32 mt-16 h-full w-full text-white text-xl'>
                    <div className='flex flex-col w-full justify-center'>
                        <div className='flex flex-col text-3xl cursor-pointer bg-slate-700 rounded-md w-1/2 pt-2 m-auto mb-16'>
                            <div className='flex flex-row'>
                                <div
                                    className='flex flex-col justify-center w-1/3'
                                    id='instructions-tab'
                                    onClick={() => setSelectedTab('instructions')}
                                >
                                    <p className='flex m-auto mb-2'>Instructions</p>
                                </div>
                                <div
                                    className='flex flex-col justify-center w-1/3'
                                    id='solve-tab'
                                    onClick={() => setSelectedTab('solve')}
                                >
                                    <p className='flex m-auto mb-2'>Solve</p>
                                </div>
                                <div
                                    className='flex flex-col justify-center w-1/3'
                                    id='submit-tab'
                                    onClick={() => setSelectedTab('submit')}
                                >
                                    <p className='flex m-auto mb-2'>Submit</p>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div
                                    className='flex w-1/3 h-0 mr-auto border-solid border-white border-2 rounded-full'
                                    style={{ display: selectedTab === 'instructions' ? 'block' : 'none' }}
                                />
                                <div
                                    className='flex w-1/3 h-0 mx-auto border-solid border-white border-2 rounded-full'
                                    style={{ display: selectedTab === 'solve' ? 'block' : 'none' }}
                                />
                                <div
                                    className='flex w-1/3 h-0 ml-auto border-solid border-white border-2 rounded-full'
                                    style={{ display: selectedTab === 'submit' ? 'block' : 'none' }}
                                />
                            </div>
                        </div>
                        {selectedTab === 'instructions' && (
                            <div className='flex justify-center'>
                                <div className='flex flex-col w-1/2 m-auto'>
                                    <p className='flex m-auto text-3xl'>
                                        Welcome to Nonogram!
                                    </p>
                                    <br />
                                    <p className='flex'>
                                        Goal: Fill each of the correct squares.
                                        <br />
                                        <br />
                                        Tips:
                                        <br />
                                        &nbsp;&nbsp;1. Use the switch at the bottom of the board to toggle between fill mode and mark mode.
                                        <br />
                                        &nbsp;&nbsp;2. Each row and each column has a hint box. These boxes each have at least one number in them, and the number represents how many filled squares in a row exist in that row/column before a gap of at least one unfilled square.
                                    </p>
                                    <br />
                                    <p className='flex'>
                                        Right now, there's only one puzzle to solve and there's no error detection. The next site update will include many more puzzles, the ability to create your own, and error detection so it's a real challenge!
                                    </p>
                                    <br />
                                    <p className='flex'>
                                        (To be honest, I don't even think the puzzle I made is technically solvable by the traditional rules of 3 incorrect guesses being a game over, but oh well, c'est la vie. Better puzzles inbound Eventually™.)
                                    </p>
                                </div>
                            </div>
                        )}
                        {selectedTab === 'solve' && (
                            <NonogramGrid data={grid} />
                        )}
                        {selectedTab === 'submit' && (
                            <div className='flex justify-center'>
                                <div className='flex flex-col w-1/2 m-auto'>
                                    <p className='flex m-auto text-3xl'>
                                        Coming soon!
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nonogram;