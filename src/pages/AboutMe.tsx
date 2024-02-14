import React from 'react';
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';
import { MdEmail, MdOutlineWork } from 'react-icons/md';
import { 
    SiPython, SiCss3, SiHtml5, SiJavascript, SiPhp, 
    SiTypescript, SiDjango, SiPostgresql, SiNodedotjs,
    SiExpress, SiNestjs, SiReact, SiFlask, SiFastapi,
    SiLaravel, SiTailwindcss, SiBootstrap, SiMysql, SiMongodb, 
    SiSqlite, SiDocker, SiRedis, SiLinux, SiRabbitmq,
} from 'react-icons/si';
import { DiJava } from "react-icons/di";
import { GiGraduateCap } from 'react-icons/gi';
import { Badge } from '../components';

interface Links {
    name: string;
    icon: React.ReactElement;
    src?: string;
}

const AboutMe = () => {
    const links: Array<Links> = [
        { 
            name: "LinkedIn",
            icon: <IoLogoLinkedin size={35} color="white" />,
            src: "https://www.linkedin.com/in/oktavian-aji-3a43b0216/" 
        },
        { 
            name: "Twitter", 
            icon: <IoLogoTwitter size={35} color="white" />,
            src: "https://twitter.com/Iyans018"
        },
        { 
            name: "GitHub", 
            icon: <IoLogoGithub size={35} color="white" />,
            src: "https://github.com/iyans018"
        },
        { 
            name: "Email", 
            icon: <MdEmail size={35} color="white" />,
            src: "mailto:oktavian.aji18@gmail.com"
        }
    ];

    const programmingLanguages: Array<Links> = [
        { name: "Python", icon: <SiPython size={50} color="white" /> },
        { name: "JavaScript", icon: <SiJavascript size={50} color="white" /> },
        { name: "TypeScript", icon: <SiTypescript size={50} color="white" /> },
        { name: "PHP", icon: <SiPhp size={50} color="white" /> },
        { name: "Java", icon: <DiJava size={50} color="white" /> },
        { name: "HTML", icon: <SiHtml5 size={50} color="white" /> },
        { name: "CSS", icon: <SiCss3 size={50} color="white" /> },
    ];

    const frameworks: Array<Links> = [
        { name: "Node.js", icon: <SiNodedotjs size={50} color="white" /> },
        { name: "Express.js", icon: <SiExpress size={50} color="white" /> },
        { name: "Nest.js", icon: <SiNestjs size={50} color="white" /> },
        { name: "React.js", icon: <SiReact size={50} color="white" /> },
        { name: "Flask", icon: <SiFlask size={50} color="white" /> },
        { name: "FastAPI", icon: <SiFastapi size={50} color="white" /> },
        { name: "Django", icon: <SiDjango size={50} color="white" /> },
        { name: "Laravel", icon: <SiLaravel size={50} color="white" /> },
        { name: "Tailwind", icon: <SiTailwindcss size={50} color="white" /> },
        { name: "Bootstrap", icon: <SiBootstrap size={50} color="white" /> },
    ];

    const databases: Array<Links> = [
        { name: "MySQL", icon: <SiMysql size={50} color="white" /> },
        { name: "MongoDB", icon: <SiMongodb size={50} color="white" /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={50} color="white" /> },
        { name: "Sqlite", icon: <SiSqlite size={50} color="white" /> },
    ];

    const otherTechnologies: Array<Links> = [
        { name: "Docker", icon: <SiDocker size={50} color="white" /> },
        { name: "Redis", icon: <SiRedis size={50} color="white" /> },
        { name: "Linux", icon: <SiLinux size={50} color="white" /> },
        { name: "RabbitMQ", icon: <SiRabbitmq size={50} color="white" /> }
    ];

    return (
        <>
            <section id="about" className="bg-dark min-h-screen flex flex-col justify-center px-10 py-4 md:px-20">
                <div className="mt-12 mb-4 flex justify-center flex-center md:justify-start">
                    <Badge text="ABOUT ME" />
                </div>
                <div className="flex flex-col items-center md:gap-10 md:flex-row md:justify-between">
                    <img 
                        className="rounded-xl w-56 sm:w-64 md:w-1/3 md:mt-0"
                        src="/oktavian-profile.jpg"
                        alt="profile" 
                    />
                    <div className="flex flex-col gap-3 mt-4 md:gap-7 md:mt-0 md:w-2/3">
                        <p id="name" className="text-orange text-center font-bold text-2xl md:text-left md:text-4xl">Oktavian Aji Tyas Azis</p>
                        <p id="position" className="text-white text-lg text-center font-bold italic md:text-left md:text-2xl">Back End Developer and Full Stack Developer</p>
                        <p id="profile-description" className='text-white text-center text-sm md:text-left md:text-lg'>
                            I'm a <b>fresh graduate</b> with internship experience as a <b>Full Stack Developer</b> who mainly uses 
                            <b> MERN (MongoDB, Express.js, React.js, Node.js)</b> stack. I have an interest in <b>Back End Development</b>. 
                            In my thesis, I make <b>Web Service E-Commerce</b> using <b>Microservices</b> architecture and do a 
                            performance comparison with <b>JMeter</b> between <b>Microservices</b> that use the <b>RabbitMQ </b> 
                            message broker and that don't. Also, I love exploring new technology commonly used on the <b>back end</b>.
                        </p>
                        <div id="links-icon" className="flex flex-row gap-7 justify-center md:justify-start">
                            {links.map((link, index) => (
                                <a key={`${link.name}-${index}`} href={link.src} target="_blank" rel="noreferrer">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills" className="bg-dark min-h-screen px-10 py-4 md:px-20">
                <div className="flex justify-center items-center mb-4">
                    <Badge text="SKILLS"/>
                </div>
                <div id="proramming-language" className="mb-4">
                    <h1 className="text-orange text-2xl font-bold mb-2">Programming Language</h1>
                    <div className="grid grid-cols-4 gap-5 md:flex md:flex-row" id="programming-language-icons">
                        {programmingLanguages.map(item => item.icon)}
                    </div>
                </div>
                <div id="frameworks" className="mb-4">
                    <h1 className="text-orange text-2xl font-bold mb-2">Frameworks</h1>
                    <div className="grid grid-cols-4 gap-5 md:flex md:flex-row" id="frameworks-icons">
                        {frameworks.map(framework => framework.icon)}
                    </div>
                </div>
                <div id="databases" className="mb-4">
                    <h1 className="text-orange text-2xl font-bold mb-2">Databases</h1>
                    <div className="grid grid-cols-4 gap-5 md:flex md:flex-row" id="databases-icons">
                        {databases.map(database => database.icon)}
                    </div>
                </div>
                <div id="other-technologies" className="mb-4">
                    <h1 className="text-orange text-2xl font-bold mb-2">Other Technologies</h1>
                    <div className="grid grid-cols-4 gap-5 md:flex md:flex-row" id="other-technologies-icons">
                        {otherTechnologies.map(item => item.icon)}
                    </div>
                </div>
            </section>
            <section id="experiences-and-education" className="bg-dark min-h-screen flex flex-col px-10 py-4 gap-4 md:px-20 md:flex md:flex-row md:justify-between">
                <div id="exepriences" className="w-full mb-10 md:mb-0 md:w-1/2">
                    <div className="flex flex-col mb-4">
                        <Badge text="EXPERIENCES" />
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <div className="flex row gap-5 items-center">
                                <div className="flex items-center justify-center w-16 bg-orange h-16 rounded-full">
                                    <MdOutlineWork size={30} />
                                </div>
                                <p className="mb-2 text-xl font-bold text-white">Working History</p>
                            </div>
                            <div className="flex row items-center">
                                <div className="ml-8 w-px h-10 bg-gray-300"></div>
                            </div>
                        </div>
                        <div className="flex ml-6">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-4 h-4 border-2 border-orange rounded-full"></div>
                                </div>
                                <div className="w-px h-full bg-gray-300"></div>
                            </div>
                            <div className="pb-8 ">
                                <p className="text-xl font-bold text-white">Software Developer Internship Training - Glints Academy</p>
                                <p className="mb-2 text-lg font-medium text-gray-200">Aug 2021 - Feb 2022</p>
                                <p className="text-gray-400">
                                    - Learn agile methodology to be applied immediately when starting the internship.<br/>
                                    - Learn Git and GitHub to write code with the team.<br/>
                                    - Create a mini project with a team as an exercise to implement things that havebeen taught.<br/>
                                    - Attend all meetings and do assignments where the material is made to improve our soft skills.<br/>
                                    - 1on1 mentoring session to ask for advice and learn about technical matters experienced during the internship.
                                </p>
                            </div>
                        </div>
                        <div className="flex ml-6">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-4 h-4 border-2 border-orange rounded-full"></div>
                                </div>
                                <div className="w-px h-full bg-gray-300"></div>
                            </div>
                            <div className="pb-8 ">
                                <p className="text-xl font-bold text-white">Full Stack Developer - Ravenry</p>
                                <p className="mb-2 text-lg font-medium text-gray-200">Sept 2021 - Feb 2022</p>
                                <p className="text-gray-400">
                                    - Develop and maintain internal web apps..<br/>
                                    - Develop product using Scrum methodology..<br/>
                                    - Build new features and update existing features at the backend using Node.js.<br/>
                                    - Enhance performance in the backend by modifying the queries database.<br/>
                                    - Convert design to code (including API consumption) at the front end using React.js. <br/>
                                    - Create a test case for E2E testing and implement it at the front end using Cypress. <br/>
                                    - Code review and fixing bugs. <br/>
                                </p>
                            </div>
                        </div>
                        <div className="flex ml-6">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-4 h-4 border-2 border-orange rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="education" className="w-full md:w-1/2">
                    <div className="flex flex-col mb-4">
                        <Badge text="EDUCATION" />
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <div className="flex row gap-5 items-center">
                                <div className="flex items-center justify-center w-16 bg-orange h-16 rounded-full">
                                    <GiGraduateCap size={30} />
                                </div>
                                <p className="mb-2 text-xl font-bold text-white">Education History</p>
                            </div>
                            <div className="flex row items-center">
                                <div className="ml-8 w-px h-10 bg-gray-300"></div>
                            </div>
                        </div>
                        <div className="flex ml-6">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-4 h-4 border-2 border-orange rounded-full"></div>
                                </div>
                                <div className="w-px h-full bg-gray-300"></div>
                            </div>
                            <div className="pb-8 ">
                                <p className="text-xl font-bold text-white">Vocational High School Muhammadiyah 4 West Jakarta</p>
                                <p className="mb-2 text-lg font-medium text-gray-200">Jun 2015 - Mei 2018</p>
                                <p className="text-gray-400">
                                    Successfully passed with the highest national exam scores in the computer and network engineering department and managed to 
                                    get a certificate of competence.
                                </p>
                            </div>
                        </div>
                        <div className="flex ml-6">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-4 h-4 border-2 border-orange rounded-full"></div>
                                </div>
                                <div className="w-px h-full bg-gray-300"></div>
                            </div>
                            <div className="pb-8 ">
                                <p className="text-xl font-bold text-white">Pamulang University South Tangerang</p>
                                <p className="mb-2 text-lg font-medium text-gray-200">Sept 2018 - Aug 2022</p>
                                <p className="text-gray-400">
                                   Graduated with GPA 3.53/4.00 with the thesis title is "Performance Analysis of Publish-Subscribe Model Using RabbitMQ For 
                                   Asynchronous Service Communication In Microservice E-Commerce" and have participated in the Kampus Merdeka certified internship 
                                   program in batch 1.
                                </p>
                            </div>
                        </div>
                        <div className="flex ml-6">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-4 h-4 border-2 border-orange rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="certifications" className="bg-dark min-h-screen px-10 py-4 md:px-20">
                <div className="flex flex-col">
                    <Badge text="CERTIFICATIONS" />
                </div>
            </section>
        </>
    )
}

export default AboutMe;