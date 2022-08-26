export interface WritingPieceObj {
    title: string,
    type: 'Short Story' | 'Poem' | 'Flash Fiction',
    synopsis: string | null,
    warning: string | null,
    download: string
}

export interface WritingPieceProps {
    data: WritingPieceObj
}