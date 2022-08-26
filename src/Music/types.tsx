export interface MusicPiece {
    title: string,
    key: string,
    origin: 'Original' | 'Arrangement' | 'Reimagining',
    link: string,
    download: string | null
}

export interface PieceProps {
    data: MusicPiece
}