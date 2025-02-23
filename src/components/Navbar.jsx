import {useState} from 'react'
import logo from "../assets/logo.png"
import {NAVIGATION_LINKS} from "../constants"
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const[isMobileMenuOpen,setisMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setisMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e,href)=>{
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if(targetElement){
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPostion = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top : offsetPostion,
                behavior:"smooth",
            })
        }
        setisMobileMenuOpen(false);
    }
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/*Desktop Menu*/}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
        <div className="flex justify-between gap-6">
            <div>
                <a href="#">
                    <img src={logo}width={90} alt="logo"></img>
                </a>
            </div>
            <div>
                <ul className="flex items-center gap-4">
                    {NAVIGATION_LINKS.map((item,index)=>(
                        <li key={index}><a className="text-sm hover:text-yellow-400" href={item.href}
                        onClick={(e)=> handleLinkClick(e,item.href)}>
                            {item.label}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
       {/*Mobile-Menu*/}
       <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
                <a href="#">
                    <img src={logo} width={90} alt="logo" className="m-2"></img>
                </a>
            </div>
            <div className="flex items-center">
                <button className="focus:outline-none lg:hidden" 
                onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <FaTimes className="m-2 h-6 w-5"></FaTimes>
                    ):(
                        <FaBars className="m-2 h-6 w-5"></FaBars>
                    )}
                </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                {NAVIGATION_LINKS.map((item,index)=>(
                    <li key={index}>
                        <a className="block w-full text-xl font-semibold" href={item.href} 
                        onClick={(e)=> handleLinkClick(e,item.href)}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
          )}
       </div>
      </nav>
    </div>
  )
}

export default Navbar
