export interface MusicPieceObj {
    title: string,
    key: string,
    origin: 'Original' | 'Arrangement' | 'Reimagining',
    link: string,
    download: string | null
}

export interface MusicPieceProps {
    data: MusicPieceObj
}