import AboutImg from "../assets/about.png";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function About() {
  const config = {
    line1:
      "Hello! I’m Keerthana Murali, a passionate Front-End Developer with a Master’s degree in Computer Applications (2023) from Anjalai Ammal Mahalingam Engineering College, India. I specialize in creating elegant and responsive web applications that focus on both functionality and design.",
    line2:
      "My expertise lies in React.js, Tailwind CSS, HTML, CSS, and JavaScript, which allows me to craft modern, functional websites. I have also gained experience in Python and SQL for backend development, enabling me to contribute to full-stack projects when needed.",
    line3: 
    "I have worked on real-world projects, including developing a web-based application using a combination of front-end and back-end technologies. One of my proudest achievements was collaborating on a project for a charity organization, which received positive feedback for its design and functionality.",
    line4:
    " In addition to coding, I enjoy working in dynamic teams and learning new tools and frameworks to keep up with industry trends. I’m always excited to take on new challenges and explore how technology can positively impact people’s lives.",
    link1:""

    
 
    
  }

  return (
    <section
      className="flex flex-col md:flex-row  px-5 font-feature-font "
      id="about">
      <div className=" py-5 md:w-1/2  border-rounded-full  hover:shadow-xl   ">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-black border-b-4 border-[#007BFF] mb-5 w-[170px] font-bold ">
            About Me
          </h1>
          <p className="2xl pb-5 font-hero-font "> {config.line1} </p>
          <p className="2xl pb-5 font-hero-font"> {config.line2}</p>
          <p className="2xl pb-5 font-hero-font"> {config.line3} </p>
          <p className="2xl pb-5 font-hero-font"> {config.line4} </p>


          <div class="md:w-1/2  flex items-center justify-between  ">
            <a href={config.link1} download="" class="downloadables">
              <span class="button_text">Download Resume</span>
              <span class="button_icon">
                <IoCloudDownloadOutline />
              </span>
            </a>
          
          </div>
          
        </div>
      </div>
    </section>
  );
}
