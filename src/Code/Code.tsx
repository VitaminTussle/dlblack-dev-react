import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Code.css';
import Project from './Project';
import { ProjectObject } from './types';

const Code = () => {
    // this array will eventually be fetched from an API
    const projects: ProjectObject[] = [
        {
            name: 'Personal Website',
            image: 'logo.png',
            status: 'Ongoing',
            description: "You're on it now! This project's link describes everything to do with Deuce Black's personal website.",
            technologies: ['React', 'TypeScript', 'Node', 'Tailwind'],
            link: 'https://github.com/VitaminTussle/dlblack-dev-react'
        },
        {
            name: 'Arkadia Website and Administration App',
            image: null,
            status: 'Ongoing',
            description: 'The official public website for a beloved arcade local to Fayetteville, AR: Arkadia Retrocade. ' +
                'Features game cabinet cataloging and statuses, in-jokes from the 90s internet, a full-fledged API, and a companion administration app to allow the owner to update relevant information on-demand.',
            technologies: ['Vanilla HTML', 'Vanilla CSS', 'Vanilla JavaScript', 'jQuery', 'Java', 'Spring Boot', 'Python', 'Flutter', 'Dart'],
            link: 'https://github.com/Arkadia-Development'
        },
        {
            name: 'Impact Alarm',
            image: null,
            status: 'Complete!',
            description: "A hackathon-winning project where a phone app scrapes for the user's alarms, and if they don't turn their alarms off fast enough, it triggers a motorized Nerf blaster to shoot them in the face. " +
                "Y'know, as coercion. If you're not getting out of bed quick enough, this is what you've got coming, right?",
            technologies: ['Java', 'Android Studio', 'Raspberry Pi', 'Python', 'Physical Wiring/Soldering'],
            link: 'https://github.com/Team-Goose/impact-alarm-android'
        }
    ];

    return (
        <div>
            <Navbar/>
            <div className='flex w-full'>
                <div className='flex flex-col mr-32 ml-32 mt-16 h-full w-full text-white text-xl'>
                    <p className='text-5xl'>
                        Code Projects
                    </p>
                    <br />
                    {projects.map((p, ind, arr) => (
                        <div className='w-full items-center'>
                            <Project key={p.name} data={p} />
                            {ind < arr.length - 1 && (
                                <div className='border border-slate-700 w-4/5 m-auto' />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Code;