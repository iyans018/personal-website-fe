import { Link } from "react-router-dom"

interface Menu {
    name: string;
    url: string;
}

const Footer = () => {
    const usefulLinks: Array<Menu> = [
        { name: 'Home', url: '/' },
        { name: 'Projects', url: '/projects' },
        { name: 'Articles', url: '/articles' },
        { name: 'About Me', url: '/aboutme' }
    ];
    
    const socialMedia: Array<Menu> = [
        { name: 'Instagram', url: 'https://www.instagram.com/iyans018/' },
        { name: 'Twitter', url: 'https://twitter.com/Iyans018' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/oktavian-aji-3a43b0216/' },
        { name: 'GitHub', url: 'https://github.com/iyans018' }
    ];

    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-black px-10 py-10 md:px-20">
            <div className="flex flex-col gap-3 md:flex-row justify-evenly items-start mb-3">
                <div id="about-me">
                    <h1 className="text-orange text-xl font-bold">Oktavian Aji.</h1>
                    <p className="text-white mt-4">Fullstack Developer | Backend Developer</p>
                </div>
                <div className="flex flex-col gap-2" id="useful-links">
                    <h1 className="text-slate-100 text-xl font-bold mb-3">Useful Links</h1>
                    {usefulLinks.map((link, index) => (
                        <Link className="cursor-pointer text-gray-600 font-medium hover:text-gray-400" key={`useful-links-${index}`} to={link.url}>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-2" id="social-media">
                    <h1 className="text-slate-100 text-xl font-bold mb-3">Social Media</h1>
                    {socialMedia.map((link, index) => (
                        <a key={`social-media-${index}`} href={link.url} rel="noreferrer" className="cursor-pointer text-gray-600 font-medium hover:text-gray-400">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
            <hr />
            <p className="text-white text-center mt-3 mb-8 md:mb-0">Copyright &copy; by Oktavian Aji Tyas Azis {year}</p>
        </footer>
    )
}

export default Footer