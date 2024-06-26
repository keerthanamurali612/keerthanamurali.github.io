import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
  const [toggleMenu,setToggleMenu]=useState(false);


    return <header className="flex justify-between px-5 py-5 bg-primary font-header-font ">
        <a className="font-bold text-black text-xl " href="#"> <span className='text-3xl'> P</span>orfolio</a>

        <nav className="hidden md:block " >
            <ul className="flex text-white text-xl ">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Project</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

        </nav>

        {/* mobile view */}
       { toggleMenu&&  <nav className="block md:hidden " >
            <ul className="flex flex-col text-white text-xl mobile-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Project</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

        </nav>
        }
        <button  onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/> </button>
        
   </header>
    
}