import { Link, NavLink } from 'react-router-dom';

interface Menu {
    name: string;
    url: string;
}

const Navbar = () => {
    const menu: Array<Menu> = [
        { name: 'Home', url: '/' },
        { name: 'Projects', url: '/projects' },
        { name: 'Articles', url: '/articles' },
        { name: 'About Me', url: '/aboutme' }
    ];

    return (
        <nav className="fixed top-0 z-50 px-10 py-2 md:px-20 md:py-4 border-b min-w-full flex flex-row items-center bg-dark justify-between">
            <Link to="/">
                <p className="text-white font-bold font-sans md:text-xl cursor-pointer">
                    OKTAVIAN <span className="text-orange">AJI</span>
                </p>
            </Link>
            <ul className="hidden md:flex md:flex-row md:items-center md:gap-5" id="menu-desktop">
                {menu.map((item, index) => (
                    <li key={`menu-${index}`}>
                        <NavLink 
                            to={item.url} 
                            className="font-medium hover:text-orange cursor-pointer"
                            style={({ isActive }) => isActive ? { color: '#FFB742' } : { color: 'white' }}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <button className="bg-orange text-xs sm:text-sm md:text-base text-black font-medium rounded-full py-1.5 px-5 hover:bg-amber-500 active:bg-amber-600 focus:outline-none">
                Hire Me
            </button>
        </nav>
    )
}

export default Navbar;