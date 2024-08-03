import AboutImg from "../assets/about.png";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function About() {
  const config = {
    line1:
      "Hi,My name is Keerthana Murali .I'm a Front-end developer.I built beautiful Website with Reactjs and Tailwind CSS",
    line2:
      "I'm proficient in Front-end skills like Reactjs,Tailwind,CSS,HTML,JS and many more  ",
    line3: "In backend i know Python,SQL",

    link1:"",

    link2:""
 
    
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
          <p className="2xl pb-5 "> {config.line1} </p>
          <p className="2xl pb-5"> {config.line2}</p>
          <p className="2xl pb-5"> {config.line3} </p>


          <div class="button-align flex md:flex-row">
            <a href={config.link1} download="" class="downloadables">
              <span class="button_text">Download Resume</span>
              <span class="button_icon">
                <IoCloudDownloadOutline />
              </span>
            </a>
            <a href={config.link2} download="" class="downloadables">
              <span class="button_text">Download CV</span>
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
