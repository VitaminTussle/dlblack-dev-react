import React from 'react';
import Navbar from '../Navbar/Navbar';
import InfoContainer from './InfoContainer';
import { images } from '../utils/images';

const Home = () => {
    const bioContent = `Dustin "Deuce" Black is, at the most basic level, a problem solver.
        Under more liberal definitions, he is also a hiker, a musician, an author, a logician, a linguist, and (likely of most importance) a software engineer.
        Above all else, he aspires for the living room of his home to be confusing to those who enter it.
        Rock climbing shoes on the shoe rack, a piano-keyboard on one wall, a high-end home theater on another, an easel with an unfinished painting in the corner...
        You get it.`;
    
    const codeContent = `Deuce's programming experience is extensive.
        He's been programming since he was nine years old, starting off with basic HTML/CSS/JS and Arduino C.
        Early on, he developed plans for a Braille printer, and worked on it in his high school robotics class.
        He then went on to learn algorithmic Java, from which he built several cell simulators such as epidemiology and Conway's game of life.
        From there, he graduated high school two years early at the age of 16 and proceeded to excell in his studies at the University of Arkansas.
        During college, he learned a bit of C++, a lot of Python, some R, some C#, more Java in the forms of Spring Boot and Android Studio, and, through internships, production JavaScript and TypeScript.
        He made sure to participate in the 24-hour J.B. Hunt hackathon with his friends every semester, achieving ranks in the top four teams four out of six times, and even pulling off a first place win once.
        Deuce then graduated as a First-Ranked Senior Scholar with a Bachelor's of Science in Computer Science at a 4.0 GPA in May of 2022 at 19 years old.
        In production environments, he has worked on everything from C#'s ASP.NET Core command line applications with R and Microsoft SQL Server integrations to more standard React and Angular projects with backends ranging from Spring Boot to Koa.js, and with databases ranging from PostGreSQL to MongoDB.
        He started off his full-time career as a Software Engineer I at SupplyPike, a retail and CPG logistics company.
        Since then, he has moved on, and is currently a Software Engineer III at RXNT, a medtech company focused on electronic prescriptions and doctor appointment scheduling.`;
    
    const musicContent = `Outside of programming, Deuce also enjoys writing sheet music.
        Some pieces are arrangements while others are original pieces.
        The instrumentations range from solo violin (which he has played since he was three years old) to piano, string quartets, and mixed ensembles.
        He dreams to one day write, play, sing, and produce a full album.`;
    
    const writingContent = `Deuce prides himself on his linguistic skills, especially in writing eloquent and correct English.
        He has applied these skills to the worlds of poetry and short stories since high school, and some of his works are available for viewing on this site.
        He also successfully completed National Novel Writing Month in November of 2023 with the first 50,000 words of a low-fantasy novel that he plans to complete soon.
        Outside of English, he also studied Mandarin Chinese for five years.
        During that time, he participated in a service- and culture-focused trip to Beijing and Yangzhou in China.
        He got to see all of the famous landmarks and got to help a combination school/orphanage for impaired children clean and update their facilities.
        Deuce takes an interest in languages in general, really.
        He studied German for a semester and hopes to learn Dutch, Greek, Hawaiian, Irish, and many more languages.
        He's already been lucky enough to travel around the world quite a bit, but using these skills, he hopes to do so even more.`;
    
    const pocketsContent = `Deuce has many controversial opinions on food. He will be taking no questions.`;

    return (
        <div className='mb-16'>
            <Navbar/>
            <div className='flex' >
                <div className='flex flex-col xl:flex-row items-center xl:items-start justify-between xl:mx-32 mt-16 h-full'>
                    <div className='w-1/2 xl:w-1/3 mb-8'>
                        <img src={images['me.jpg']} alt='deuce in hiking clothes leaned up against a tree' className='flex' />
                    </div>
                    <div className='w-3/4 xl:w-1/2 h-full text-white text-xl'>
                        <InfoContainer label='BIO' content={bioContent} />
                        <InfoContainer label='CODE' content={codeContent} />
                        <InfoContainer label='MUSIC' content={musicContent} />
                        <InfoContainer label='WRITING' content={writingContent} />
                        <InfoContainer label='POCKETS?' content={pocketsContent} />
                        <p className='mb-8'>
                            If you are interested in Deuce, feel free to download his resume from the navbar to learn more about his career. Otherwise, following are links to his relevant socials.
                        </p>
                        <div className='w-1/3 m-auto items-center'>
                            <div className='mb-4'>
                                <a href='https://github.com/VitaminTussle' target='_blank' rel='noreferrer' className='flex flex-row items-center hover:underline'>
                                    <img src={images['github_logo_white.png']} alt='github logo' className='w-1/4 mr-4' />
                                    /VitaminTussle
                                </a>
                            </div>
                            <div>
                                <a href='https://www.linkedin.com/in/dlblack-dev/' target='_blank' rel='noreferrer' className='flex flex-row items-center hover:underline'>
                                    <img src={images['linkedin_logo_white.png']} alt='linkedin logo' className='w-1/4 mr-4' />
                                    /in/dlblack-dev
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;