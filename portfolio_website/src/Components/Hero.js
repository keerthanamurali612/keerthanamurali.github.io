import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";


export default function Hero(){

   const config ={
      subtitle:'Front-end Developer'
   }





    return  <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center '>
        <div className='md:w-1/2 flex flex-col' >
           <h1 className=' text-4xl text-black  font-hero-font' > Hi, <br/> I'm Keerthana Murali

              <p className='text-2xl'>{config.subtitle}</p>

           </h1>
             
             <div className='flex text-3xl px-4 py-5 '>
                
                <a href='#'className='pr-4  hover:text-[#971b0a]'> <AiOutlineLinkedin /></a>
                <a href='#' className=' hover:text-[#971b0a]'> <AiOutlineGithub /></a>
             </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} />
        



    </section>
}