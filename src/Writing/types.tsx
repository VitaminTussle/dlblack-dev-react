export interface WritingPieceObj {
    title: string,
    type: 'Short Story' | 'Poem' | 'Flash Fiction',
    synopsis: string | null,
    warning: string | null,
    download: string | null
}

export interface WritingPieceProps {
    data: WritingPieceObj
}