import websiteImg1 from "../assets/ecommerce-websites.jpg";
import websiteImg2 from "../assets/food-ecommerce.jpg";
import websiteImg3 from "../assets/website-blog.jpg";

export default function Projects() {

  const config={
    projects:[
      {
        image: websiteImg1,
        description:"A Ecommerce Website.Built with MERN Stack",
        link:"https://github.com/keerthanamurali612 "
      },
      {
        image: websiteImg2,
        description:"Food Ecommerce Website like Swiggy,Built with Angular",
        link:"https://github.com/keerthanamurali612 "
      },
      {
        image: websiteImg3,
        description:"Basic Blog Website.Built with Next Js and MongoDB",
        link:"https://github.com/keerthanamurali612 "
      }
      
    ]
  }


  return (
    <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-demo-secondary text-white">
      <div className="w-full ">
        <div className="flex  flex-col px-10 py-5 ">
          <h1 className="text-4xl text-black border-b-4 border-[#007BFF] mb-5 w-[170px] font-bold ">
            Projects
          </h1>
          <p>
            These are some of my projects.I have Built these with React,MERN and vanilla CSS.Check them out.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10  gap-5">

          {config.projects.map((project)=>(

             

            <div className="relative hover:shadow-2xl  ">  
                <img className="h-[200px] w-[500px] rounded " src={project.image} />
              <div className="project-desc">
                 <p className="text-center px-5 py-5">{project.description}</p>

                 <div className="flex justify-center">
                    <a className="btn" target="_blank" href={project.link}> View Project</a>
                 </div>

              </div>

              


            </div>

          ))}
        
          
        
          
        
       

         
        </div>
      </div>
    </section>
  );
}

