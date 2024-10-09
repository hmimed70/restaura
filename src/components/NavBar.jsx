import { useState } from "react"
import logo from '../assets/logo.png'
import {LINKS } from '../constants/index'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
const NavBar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenu(!isMobileMenu);
    }
    const handleScroll = (event, targetId) => {
      event.preventDefault();
      const target = document.getElementById(targetId);
    if(target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
     setIsMobileMenu(false);
} 
  return (
    <nav className="fixed top-4 z-50 w-full flex  flex-col items-center justify-center mx-auto">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg ">
         <img src={logo} alt="logo" width={80} height={22} />
         <div className="hidden space-x-6 lg:flex mx-auto">
            {
         LINKS.map((link, index) => (
            <a
              key={index}   
              href={`#${link.href}`}
              className={`text-md ${index!==0 ? 'border-l-2 border-neutral-300/20 pl-2' : ''} hover:opacity-50`}
              onClick={(event) => handleScroll(event, link.targetId)}
            
            >
              {link.text}
            </a>
         ))
        }
        </div>
         <div className=" lg:hidden">
             <button onClick={toggleMobileMenu}>
                {isMobileMenu ? <FaTimes /> : <FaBars />}
             </button>
         </div>
      </div>
      
       {isMobileMenu && (
        <div className="w-full backdrop-blur-lg lg:hidden">
             {LINKS.map((link, index) => (
                <a key={index} href={`#${link.targetId}`} className="block p-4 uppercase tracking-tighter" onClick={(e) => handleScroll(e, link.targetId)}>
                    {link.text}
                </a>
             ))}
        </div>
       )}
    </nav>    
  )
}

export default NavBar