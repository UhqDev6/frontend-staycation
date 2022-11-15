import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setIsLoading(true)

    }
    return(
        <>
            <ul className="hidden md:flex">
                <li>
                    <p  className="p-4 text-gray-500">Home</p>
                </li>
                <li>
                    <p  className="p-4 text-gray-500">Browse by</p>
                </li>
                <li>
                    <p  className="p-4 text-gray-500">Stories</p>
                </li>
                <li>
                    <p  className="p-4 text-gray-500">Agents</p>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
            {isLoading &&
                
                    !nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>
                
            }
            </div>
            {isLoading &&
            <div className={!nav ? 'fixed left-0 top-0 z-30 w-[60%] h-full bg-cyan-400 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className='uppercase p-4'>
                    <li>
                        <p  className="p-4 text-white border-b  border-r-white">Home</p>
                    </li>
                    <li>
                        <p  className="p-4 text-white border-b border-r-white">Browse by</p>
                    </li>
                    <li>
                        <p  className="p-4 text-white border-b border-r-white">Stories</p>
                    </li>
                    <li>
                        <p  className="p-4 text-white">Agents</p>
                    </li>
                </ul>
            </div>
            }
        </>
        
    );
}