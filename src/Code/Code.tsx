import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Code.css';
import ProjectRow from './ProjectRow';
import { ProjectRowObject } from './types';

const Code = () => {
    // this array will eventually be fetched from an API
    const projects: ProjectRowObject[] = [
        {
            name: 'Personal Website',
            image: '../assets/personal_website.png',
            status: 'Ongoing',
            description: "You're on it now! This project link describes everything to do with Deuce Black's personal website.",
            technologies: ['React', 'TypeScript', 'Node', 'Tailwind'],
            link: 'https://github.com/VitaminTussle/dlblack-dev-react'
        },
        {
            name: 'Arkadia Website and Administration App',
            image: '../assets/arkadia.png',
            status: 'Ongoing',
            description: 'The official public website for a beloved arcade local to Fayetteville, AR: Arkadia Retrocade. ' +
                'Features game cabinet cataloging and statuses, in-jokes from the 90s internet, a full-fledged API, and a companion administration app to allow the owner to update relevant information.',
            technologies: ['Vanilla HTML', 'Vanilla CSS', 'Vanilla JavaScript', 'jQuery', 'Java', 'Spring Boot', 'Python', 'Flutter', 'Dart'],
            link: 'https://github.com/Arkadia-Development'
        },
        {
            name: 'Impact Alarm',
            image: '../assets/impact_alarm.png',
            status: 'Complete!',
            description: "A hackathon-winning project where a phone app scrapes for the user's alarms, and if they don't turn their alarms off fast enough, it triggers a motorized Nerf blaster to shoot them in the face.",
            technologies: ['Java', 'Android Studio', 'Raspberry Pi', 'Python', 'Physical Wiring/Soldering'],
            link: [
                {
                    link: 'https://github.com/Team-Goose/impact-alarm-android',
                    label: 'Android App Repo'
                },
                {
                    link: 'https://github.com/Team-Goose/Impact-Alarm-Web-Server',
                    label: 'Python Web Server Repo'
                }
            ]
        }
    ];

    return (
        <div>
            <Navbar/>
            <div className='flex w-full' style={{ height: 'calc(100vh - 96px)' }}>
                <div className='flex flex-col items-center mr-32 ml-32 mt-16 h-full w-full text-white text-xl'>
                    <p className='text-5xl'>
                        Code Projects
                    </p>
                    <br />
                    <table className='w-full table-fixed'>
                        <thead>
                            <td className='border-solid border-2 border-cyan-600 text-center' style={{ width: '10%' }}>
                                Name
                            </td>
                            <td className='border-solid border-2 border-cyan-600 text-center' style={{ width: '10%' }}>
                                Image
                            </td>
                            <td className='border-solid border-2 border-cyan-600 text-center' style={{ width: '10%' }}>
                                Status
                            </td>
                            <td className='border-solid border-2 border-cyan-600 text-center w-1/2'>
                                Description
                            </td>
                            <td className='border-solid border-2 border-cyan-600 text-center' style={{ width: '10%' }}>
                                Technologies
                            </td>
                            <td className='border-solid border-2 border-cyan-600 text-center' style={{ width: '10%' }}>
                                Link
                            </td>
                        </thead>
                        <tbody>
                            {projects.map(p => <ProjectRow data={p} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Code;