import React, { FC, useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { NonogramGridProps, CellCheckedVals } from './types';
import HintBox from './HintBox';
import Cell from './Cell';

const NonogramGrid: FC<NonogramGridProps> = ({ data }) => {
    const startingSolution: CellCheckedVals[][] = [];
    // grid is guaranteed to be a 15x15 square
    for (let i = 0; i < 15; i++) {
        startingSolution.push([]);
        for (let j = 0; j < 15; j++) {
            startingSolution[i].push('unchecked');
        }
    }
    const [cursorType, setCursorType] = useState('fill');
    const [solution, setSolution] = useState(startingSolution);
    const [puzzleSolved, setPuzzleSolved] = useState(false);

    const getColHints = () => {
        const hints: number[][] = [];
        // this logic only works because it's guaranteed to be a square
        for (let i = 0; i < data.key.length; i++) {
            if (!hints[i]) {
                hints[i] = [];
            }
            let count = 0;
            for (let j = 0; j < data.key[i].length; j++) {
                if (!data.key[j][i]) {
                    if (count) hints[i].push(count);
                    count = 0;
                }
                else count++;
            }
            if (count || !hints[i].length) hints[i].push(count);
        }
        return hints;
    };

    useEffect(() => {
        let allMatch = true;
        for (let i = 0; i < solution.length; i++) {
            for (let j = 0; j < solution[i].length; j++) {
                if (data.key[i][j] && solution[i][j] !== 'filled') {
                    allMatch = false;
                    break;
                }
            }
        }
        setPuzzleSolved(allMatch);
    }, [solution.toString(), data.key.toString()]);

    return (
        <div className='flex flex-col m-auto'>
            <div className='flex flex-col m-auto mb-6'>
                <div className='flex flex-row'>
                    <div className='h-40 w-40 m-1' />
                    {getColHints().map((arr, ind) => (
                        <HintBox data={{ direction: 'vertical', hint: arr }} key={'colhint' + ind} />
                    ))}
                </div>
                {data.key.map((row, rowNum) => {
                    const hint = [];
                    let count = 0;
                    for (let i = 0; i < row.length; i++) {
                        if (!row[i]) {
                            if (count) hint.push(count);
                            count = 0;
                        }
                        else count++;
                    }
                    if (count || !hint.length) hint.push(count);
                    return (
                        <div className='flex flex-row' key={'row' + rowNum}>
                            <HintBox data={{ direction: 'horizontal', hint: hint }} key={'rowhint' + rowNum} />
                            {row.map((status, colNum) => (
                                <Cell
                                    data={{
                                        checked: solution[rowNum][colNum],
                                        onClick: () => {
                                            const tempSolution: CellCheckedVals[][] = [];
                                            for (let i = 0; i < solution.length; i++) {
                                                tempSolution.push([]);
                                                for (let j = 0; j < solution[i].length; j++) {
                                                    tempSolution[i][j] = solution[i][j];
                                                }
                                            }
                                            if (cursorType === 'fill' && status) {
                                                tempSolution[rowNum][colNum] = 'filled';
                                            } else if (cursorType === 'mark' && !status) {
                                                tempSolution[rowNum][colNum] = 'marked';
                                            }
                                            setSolution(tempSolution);
                                        }
                                    }}
                                    key={'cell' + rowNum + colNum}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
            <div className='flex flex-row m-auto mb-12 cursor-pointer' onClick={() => setCursorType(cursorType === 'fill' ? 'mark' : 'fill')}>
                <div className={'flex w-12 h-12 rounded-full' + (cursorType === 'fill' ? ' bg-white' : '')}>
                    <div className='flex w-8 h-8 m-auto rounded-sm bg-slate-900 border border-solid border-white' />
                </div>
                <div className={'flex w-12 h-12 rounded-full' + (cursorType === 'mark' ? ' bg-white' : '')}>
                    <RiCloseFill className={'flex m-auto ' + (cursorType === 'mark' ? 'text-slate-900' : 'text-white')} size={40} />
                </div>
            </div>
            {puzzleSolved && (
                <p className='flex m-auto text-3xl text-green-400'>
                    Congratulations! You solved the puzzle!
                </p>
            )}
        </div>
    );
}

export default NonogramGrid;