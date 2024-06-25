import HeroImg from '../assets/hero.png'
export default function Hero(){
    return  <section className='flex px-5 py-32 bg-secondary justify-center'>
        <h1 className='w-1/2' text-white text-6xl hero-font> Hai, <br/> I'm Keerthana Murali

        <p className='text-2xl'>Front-end Developer</p>
 
        </h1>
        <img className='w-1/3' src={HeroImg} />
        



    </section>
}