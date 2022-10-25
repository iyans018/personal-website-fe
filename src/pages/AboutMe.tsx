import React from 'react';
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { 
    SiPython, SiCss3, SiHtml5, SiJava, SiJavascript, SiPhp, 
    SiTypescript, SiDjango, SiPostgresql, SiNodedotjs,
    SiExpress, SiNestjs, SiReact, SiFlask, SiFastapi,
    SiLaravel, SiTailwindcss, SiBootstrap, SiMysql, SiMongodb, 
    SiSqlite, SiDocker, SiRedis, SiLinux, SiRabbitmq,
} from 'react-icons/si';
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

    const programmingLanguage: Array<Links> = [
        { name: "Python", icon: <SiPython size={50} color="white" /> },
        { name: "JavaScript", icon: <SiJavascript size={50} color="white" /> },
        { name: "TypeScript", icon: <SiTypescript size={50} color="white" /> },
        { name: "PHP", icon: <SiPhp size={50} color="white" /> },
        { name: "Java", icon: <SiJava size={50} color="white" /> },
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
                            {links.map(link => (
                                <a href={link.src} target="_blank" rel="noreferrer">
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
                    <h1 className="text-orange text-2xl font-bold">Programming Language</h1>
                    <div className="flex flex-row mt-2 gap-5" id="programming-language-icons">
                        {programmingLanguage.map(item => item.icon)}
                    </div>
                </div>
                <div id="frameworks" className="mb-4">
                    <h1 className="text-orange text-2xl font-bold">Frameworks</h1>
                    <div className="flex flex-row mt-2 gap-5" id="programming-language-icons">
                        {frameworks.map(framework => framework.icon)}
                    </div>
                </div>
                <div id="databases" className="mb-4">
                    <h1 className="text-orange text-2xl font-bold">Databases</h1>
                    <div className="flex flex-row mt-2 gap-5" id="programming-language-icons">
                        {databases.map(database => database.icon)}
                    </div>
                </div>
                <div id="other-technologies" className="mb-4">
                    <h1 className="text-orange text-2xl font-bold">Other Technologies</h1>
                    <div className="flex flex-row mt-2 gap-5" id="programming-language-icons">
                        {otherTechnologies.map(item => item.icon)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;