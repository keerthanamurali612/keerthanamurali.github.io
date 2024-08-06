import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";


export default function Hero(){

   const config ={
      subtitle:'Front-end Developer',
      social:{
         github:"https://github.com/keerthanamurali612",
         linkedin:"https://www.linkedin.com/in/keerthana-murali-mk99/"
      }
   }


    return  <section className='flex flex-col md:flex-row px-5 py-32 bg-demo-secondary justify-center '>
        <div className='md:w-1/2 flex flex-col' >
           <h1 className=' text-4xl text-black  font-hero-font' > Hi, <br/> I'm Keerthana Murali
              <p className='text-2xl'>{config.subtitle}</p>
           </h1>
             
             <div className='flex text-3xl px-4 py-5 '>
                
                <a href={config.social.linkedin}className='pr-4  hover:text-[#007BFF]'> <AiOutlineLinkedin /></a>
                <a href={config.social.github} className=' hover:text-[#007BFF]'> <AiOutlineGithub /></a>
             </div>
        </div>
        <img className='md:w-1/3 hover:shadow-xl' src={HeroImg} />
        



    </section>
}