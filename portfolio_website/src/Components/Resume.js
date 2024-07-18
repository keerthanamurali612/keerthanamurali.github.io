import ResumeImg from "../assets/resume.jpg";

export default function Resume() {
  return (
    <section className="flex flex-col md:flex-row bg-about-primary px-5 font-feature-font">
      <div className=" py-5 md:w-1/2 flex  justify-end">
        <img  className="w-[300px]" src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-black border-b-4 border-[#971b0a] mb-5 w-[150px] font-bold ">
            Resume
          </h1>
          <p className="2xl pb-5 ">
            You can view my resume
            <a className="btn" href="#">Download</a>
            
          </p>
          
        </div>
      </div>
    </section>
  );
}