import { AiFillHome, AiOutlineHome, AiOutlineBulb, AiFillBulb } from 'react-icons/ai'
import { BsPerson, BsPersonFill, BsBook, BsBookFill } from 'react-icons/bs';
import { useLocation, Link } from 'react-router-dom'

const BottomNav = () => {
    const location = useLocation();

    return (
        <div className="md:hidden fixed flex flex-row justify-evenly py-2 bottom-0 bg-dark w-full border-t">
            {location.pathname === '/' ? (
                <Link to="/"><AiFillHome size={35} color="white" /></Link>
            ) : <Link to="/"><AiOutlineHome size={35} color="white" /></Link>}
            {location.pathname === '/projects' ? <Link to="/projects"><AiFillBulb size={35} color="white" /></Link> : <Link to="/projects"><AiOutlineBulb size={35} color="white" /></Link>}
            {location.pathname === '/articles' ? <Link to="/articles"><BsBookFill size={35} color="white" /></Link> : <Link to="/articles"><BsBook size={35} color="white" /></Link>}
            {location.pathname === '/aboutme' ? <Link to="/aboutme"><BsPersonFill size={35} color="white" /></Link> : <Link to="/aboutme"><BsPerson size={35} color="white" /></Link>}
        </div>
    )
}

export default BottomNav;