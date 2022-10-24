import Button from "./Button";

const ProjectCard = () => {
    return (
        <div className="bg-white md:h-491 rounded-xl flex flex-col hover:scale-105 hover:transition hover:delay-300 hover:ease-out hover:z-0">
            <div className="h-40 w-full sm:h-52 md:h-300 bg-dark-50 rounded-t-xl"></div>
            <div className="py-6 px-6">
                <h1 className="text-base sm:text-xl md:text-2xl text-dark font-bold mb-2">E-Commerce Microservices</h1>
                <p className="text-xs sm:text-base md:text-base">Web Service E-Commerce using microservice architecture and using RabbitMQ Message Broker</p>
            </div>
            <div className="bottom-0 px-6 pb-6">
                <Button text="View Project" />
            </div>
        </div>
    )
}

export default ProjectCard;