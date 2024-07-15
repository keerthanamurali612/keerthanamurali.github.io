import AboutImg from '../assets/about.png';

export default function About (){
    return <section className='flex flex-col md:flex-row bg-about-primary px-5 font-feature-font'>
        <div className=' py-5 md:w-1/2'>
            <img  src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>

          <div className='flex flex-col justify-center'>
          <h1 className='text-4xl text-black border-b-4 border-[#971b0a] mb-5 w-[170px] font-bold '>About Me</h1>
          <p className='2xl pb-5 '> Hi,My name is Keerthana Murali .I'm a Front-end developer.I built beautiful Website with Reactjs and Tailwind CSS</p>
          <p className='2xl pb-5'> I'm profient in Front-end skills like Reactjs,Tailwind,CSS,HTML,JS and many more </p>
          <p className='2xl'> In backend i know Python,SQL </p>

          </div>
           
          
           

        </div>

    </section>
}