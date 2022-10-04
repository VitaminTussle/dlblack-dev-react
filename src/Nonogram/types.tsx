export interface NonogramGridObj {
    key: boolean[][]
}

export interface NonogramGridProps {
    data: NonogramGridObj
}

//////////////////////////////////////////

export interface HintBoxObj {
    direction: 'horizontal' | 'vertical',
    hint: number[]
}

export interface HintBoxProps {
    data: HintBoxObj
}

//////////////////////////////////////////

export type CellCheckedVals = 'unchecked' | 'filled' | 'marked';

export interface CellObj {
    checked: CellCheckedVals
    onClick: () => void
}

export interface CellProps {
    data: CellObj
}