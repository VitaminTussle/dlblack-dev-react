export interface LinkInfo {
    link: string,
    label: string
}

export interface ProjectRowObject {
    name: string,
    image: string,
    status: 'Ongoing' | 'Complete!' | 'Terminated'
    description: string,
    technologies: string[],
    link: string | LinkInfo[]
}

export interface ProjectRowProps {
    data: ProjectRowObject
}