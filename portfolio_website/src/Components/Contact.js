
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
      <form>
        <label>Email</label>
          <input id="email" type="email" required />

        <label>Message</label>
          <textarea id="message" />

        <button type="submit">Send</button>
     </form>
        
        
      </div>
    </div>
  </div>
</section>



    
    )  
    
}