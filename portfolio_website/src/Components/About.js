import AboutImg from '../assets/about.png';

export default function About (){
    return <section className='flex bg-about-primary px-5 font-hero-font'>
        <div className='w-1/2'>
            <img  src={AboutImg}/>
        </div>
        <div className='w-1/2 flex justify-center'>

          <div className='flex flex-col justify-center'>
          <h1 className='text-4xl text-black border-b-4 border-[#971b0a] mb-5 w-[170px] font-bold '>About Me</h1>
          <p className='2xl'> lorem ipssum lorem ipssum lorem ipssum lorem ipssum lorem ipssum   </p>

          </div>
           
            
           

        </div>

    </section>
}