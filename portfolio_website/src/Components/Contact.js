
export default function Contact() {

  const config={
    email:'keerthanamurali099@gmail.com',
    phone:'+91-8300574204'
  }
    return (

      <section className="flex flex-col bg-demo-secondary font-feature-font px-5 py-32 " id="contact">  
        {/* <div className=" flex flex-col items-center">        
            <h1 className="text-4xl text-black border-b-4 border-[#971b0a] mb-5 w-[150px] font-bold ">
              Contact
            </h1>
            <p className="2xl pb-5 ">
              Get in touch             
            </p>
            <p className="py-2"><span className="font-bold">Email:</span>{config.email}</p>
            <p className="py-2"><span className="font-bold">Phone:</span>{config.phone}</p>          
        </div> */}


<div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Contact Me
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>



      </section> 
    )





    
     
    
}