import React from "react";
import Bedge from "../components/Badge"
import Button from "../components/Button";
import Input from "../components/Input";
import ProjectCard from "../components/ProjectCard";
import { AiOutlineWhatsApp } from 'react-icons/ai';

import { 
    IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoPython, IoLogoNodejs,
    IoLogoReact
} from 'react-icons/io5';
import { SiPhp, SiExpress, SiLaravel, SiDjango, SiMongodb, SiMysql } from 'react-icons/si'

interface Skills {
    name: string;
    src: React.ReactElement;
}

const Home = () => {
    const skills: Array<Skills> = [
        { name: 'HTML', src: <IoLogoHtml5 size={48} color="white" /> },
        { name: 'CSS', src: <IoLogoCss3 size={48} color="white" /> },
        { name: 'JavaScript', src: <IoLogoJavascript size={48} color="white" /> },
        { name: 'Python', src: <IoLogoPython size={48} color="white" /> },
        { name: 'PHP', src: <SiPhp size={48} color="white" /> },
        { name: 'Node.js', src: <IoLogoNodejs size={48} color="white" /> },
        { name: 'Express.js', src: <SiExpress size={48} color="white" /> },
        { name: 'React.js', src: <IoLogoReact size={48} color="white" /> },
        { name: 'Laravel', src: <SiLaravel size={48} color="white" /> },
        { name: 'Django', src: <SiDjango size={48} color="white" /> },
        { name: 'MongoDB', src: <SiMongodb size={48} color="white" /> },
        { name: 'MySQL', src: <SiMysql size={48} color="white" /> },
    ];

    return (
        <>
            <section id="hero" className="bg-dark min-h-screen flex flex-col justify-center items-center px-10">
                <h3 className="text-white text-2xl md:text-5xl font-bold mb-6 md:mt-10 text-center">Hi, I Am <span className="text-orange underline underline-offset-8">Oktavian Aji</span> 👋</h3>
                <h1 className="text-white text-xl md:text-3xl font-bold mb-8 text-center">Software Engineer - Backend Developer</h1>
                <p className="text-white text-sm md:text-2xl font-normal text-center">A Software Engineer who have interest as a Backend Developer and also love to explore new technology</p>
                <div className="pt-8 px-2.5 mt-5">
                    <img src="/oktavian-avatar.png" width={190} height={190} alt="" />
                </div>
            </section>
            <section id="my-skills" className="bg-dark min-h-screen px-10 md:px-20 flex flex-col justify-center md:flex-row md:justify-between md:items-center">
                <div>
                    <Bedge text="MY SKILLS" />
                    <h1 className="mt-2 text-white text-2xl md:text-5xl font-bold mb-7">What My Programming <br /> Skills Included?</h1>
                    <p className="text-white text-base mb-16">I develop simple, intuitive and responsive web app that help users get things <br /> done with les effort and time with those technologies.</p>
                    <Button text="Hire Me" />
                </div>
                <div className="grid grid-cols-6 gap-5 mt-14 md:mt-0">
                    {skills.map((skill, index) => (
                        <div key={`skill-${index}`} className="w-10 h-10 md:w-20 md:h-20 rounded-xl bg-dark-50 flex justify-center items-center">
                            {skill.src}
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-dark min-h-screen flex flex-col gap-8 px-10 py-10 md:px-20" id="my-projects">
                <div className="w-full flex flex-col justify-center items-center">
                    <Bedge text="MY PROJECTS" />
                    <h1 className="mt-2 text-white text-2xl md:text-5xl font-bold">Featured Projects</h1>    
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="flex justify-center">
                    <Button text="See More Projects" />
                </div>
                {/* <div className="flex">
                </div> */}
            </section>
            <section className="bg-dark min-h-screen flex items-center px-10 pb-10 md:px-20" id="contact-me">
                <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between items-start">
                    <div className="w-full md:w-2/4 flex flex-col justify-start gap-5">
                        <Bedge text="MY CONTACT" />
                        <h1 className="text-white text-2xl md:text-5xl font-bold">Contact Me</h1>
                        <p className="text-white text-base font-medium">I develop Frontend and Backend Web App. You can reach me out by e-mail <br /> to <span className="text-orange">oktavian.aji18@gmail.com</span> or WhatsApp at button below or fill out the form. Let’s get in touch! 😉</p>
                        <a href="https://api.whatsapp.com/send/?phone=6289643371072" target="_blank">
                            <Button icon={<AiOutlineWhatsApp size={25} />} text="WHATSAPP" />
                        </a>
                    </div>
                    <form className="flex flex-col gap-3 w-full md:w-2/4">
                        <div className="flex flex-col gap-1">
                            <label className="text-white font-medium text-xl" htmlFor="">Hi Oktavian Aji,</label>
                            <Input type="textarea" placeholder="Write your message here..." name="message" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-white font-medium text-xl" htmlFor="">E-mail me back at</label>
                            <Input type="email" placeholder="example@email.com" name="email" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-white font-medium text-xl" htmlFor="">Regards,</label>
                            <Input type="text" placeholder="Name" name="name" />
                        </div>
                        <Button text="SEND" />
                    </form>
                </div>
            </section>
        </>     
    )
}

export default Home;