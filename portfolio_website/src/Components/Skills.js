import ResumeImg from "../assets/resume.jpg";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function Resume() {

  const config={
    link:''
  }
  return (

   
    
      
      <section id="skills" class="bg-gray-100 py-12 font-feature-font">
  <div class="container mx-auto items-center">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Skills</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
      
      {/* <!-- Frontend Skill --> */}
      <div class="bg-white p-6 rounded-lg shadow-md ">
        <h3 class="text-xl font-semibold text-blue-600 mb-4 flex items-center">
          <svg class="w-6 h-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2l1.41 4.09L18 9l-4.59 1.09L12 14l-1.41-3.91L6 9l4.59-1.09L12 2z"></path>
          </svg>
          Frontend 
        </h3>
        <p class="font-hero-font">HTML5,CSS3,Javascript</p>        
      </div>
      
      {/* <!-- Backend Skill --> */}
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-600 mb-4 flex items-center">
        <svg class="w-6 h-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2l1.41 4.09L18 9l-4.59 1.09L12 14l-1.41-3.91L6 9l4.59-1.09L12 2z"></path>
          </svg>
         Backend
        </h3>
        <p class="font-hero-font">Python,C/C++,SQL</p>  
      </div>

      {/* <!-- Frameworks Skill --> */}
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-600 mb-4 flex items-center">
        <svg class="w-6 h-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2l1.41 4.09L18 9l-4.59 1.09L12 14l-1.41-3.91L6 9l4.59-1.09L12 2z"></path>
          </svg>
          Frameworks
        </h3>  
        <p class="font-hero-font">React,Angular</p>   
      </div>
    </div>
  </div>
</section>


    
    
  );
}
