
export default function Contact() {

  const config={
    email:'123@gmail.com',
    phone:'123456789'
  }
    return (
    
      <section className="flex flex-col bg-demo-secondary font-feature-font px-5 py-32" id="contact">
        
        <div className=" flex flex-col items-center">
         
            <h1 className="text-4xl text-black border-b-4 border-[#971b0a] mb-5 w-[150px] font-bold ">
              Contact
            </h1>
            <p className="2xl pb-5 ">
              Get in touch
              
            </p>
            <p className="py-2"><span className="font-bold">Email:</span>{config.email}</p>
            <p className="py-2"><span className="font-bold">Phone:</span>{config.phone}</p>
            
          
        </div>
      </section> 
    )
    
    
}