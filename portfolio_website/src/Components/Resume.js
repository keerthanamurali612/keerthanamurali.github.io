import ResumeImg from "../assets/resume.jpg";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function Resume() {

  const config={
    link:''
  }
  return (

   
    <section  id="resume" className="flex flex-col md:flex-row bg-demo-accent px-5 font-feature-font">               
      <div className=" py-5 md:w-1/2 flex justify-center md:justify-end">
        <img  className="w-[300px]" src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-black border-b-4 border-[#971b0a] mb-5 w-[150px] font-bold ">
            Resume
          </h1>
          <p className="2xl pb-5 ">
            
            <a className="btn" href={config.link}>
              Download             
              </a>                        
          </p>
          
        </div>
      </div>
    </section>
  );
}
