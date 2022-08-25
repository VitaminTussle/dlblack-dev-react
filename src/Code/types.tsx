export interface ProjectObject {
    name: string,
    image: string | null,
    status: 'Ongoing' | 'Complete!' | 'Terminated'
    description: string,
    technologies: string[],
    link: string
}

export interface ProjectProps {
    data: ProjectObject
}