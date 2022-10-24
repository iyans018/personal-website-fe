import React from 'react';
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

interface Links {
    name: string;
    icon: React.ReactElement;
}

const AboutMe = () => {
    const links: Array<Links> = [
        { name: "LinkedIn", icon: <IoLogoLinkedin size={35} color="white" /> },
        { name: "Twitter", icon: <IoLogoTwitter size={35} color="white" /> },
        { name: "GitHub", icon: <IoLogoGithub size={35} color="white" /> },
        { name: "Email", icon: <MdEmail size={35} color="white" /> }
    ];

    return (
        <>
            <section id="about" className="bg-dark min-h-screen flex flex-col items-center px-10 py-4 md:flex-row md:justify-between md:px-20">
                <img 
                    className="rounded-xl mt-14 w-56 sm:w-64 md:w-1/4 md:mt-0"
                    src="/oktavian-profile.jpg"
                    alt="profile-picture" 
                />
                <div className="flex flex-col gap-3 mt-4 md:gap-5 md:mt-0 md:w-3/5">
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
                        {links.map(link => link.icon)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe;