
export default function Contact() {

  const config={
    email:'123@gmail.com',
    phone:'123456789'
  }
    return (
  
<section id="skills" class=" py-12 ">
  <div class="container mx-auto ">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Contact</h2>
    <div class=" flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-md ">

        <div className=" flex flex-col items-center">        
            {/* <h1 className="text-4xl text-black border-b-4 border-[#971b0a] mb-5 w-[150px] font-bold ">
              Contact
            </h1> */}
            <p className="2xl pb-5 ">
              Get in touch             
            </p>
            <p className="py-2"><span className="font-bold">Email:</span>{config.email}</p>
            <p className="py-2"><span className="font-bold">Phone:</span>{config.phone}</p>          
        </div>




      </div>
    </div>
  </div>
</section>



    
    )  
    
}