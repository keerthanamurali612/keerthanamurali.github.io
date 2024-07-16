import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects(){
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-1/2">
           
           <div className="flex justify-center">
           <h1 className="text-4xl text-black border-b-4 border-white mb-5 w-[170px] font-bold ">Projects</h1>

           </div>
            
        </div>

        <div className="w-1/2">
        <div className='flex px-10  gap-10'>
          <img className='h-[200px]' src={websiteImg1}/>
          <img className='h-[200px]' src={websiteImg2}/>
          <img className='h-[200px]' src={websiteImg3}/>

        </div>
           
        </div>
    </section>
}