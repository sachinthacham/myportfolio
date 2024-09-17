import React from 'react'
import mail_icon from '../../Assets/mail_icon.svg'
import call_icon from '../../Assets/call_icon.svg'
import location_icon from '../../Assets/location_icon.svg'
import { motion } from 'framer-motion';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c405c52f-a6c2-406c-913b-68120f554f71");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  
  return (
    <div id="contact" className='contact text-white flex flex-col items-center justify-center gap-10 md:gap-[80px] min-h-screen pb-10'>
      {/* Section Title */}
      <div className="contact-title text-center px-4 md:px-0">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Let's Build Something Great Together</h1>
      </div>
      
      {/* Contact Section */}
      
      <div className="contact-section flex flex-col  md:flex-row gap-8 md:gap-[50px] lg:gap-[150px] border-[3px] border- px-6 md:px-[50px] lg:px-[100px] py-10 rounded-[20px] w-full max-w-7xl mx-auto">
        
        {/* Left Side: Contact Information */}
        <div
         data-aos="fade-right"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          className="contact-left flex flex-col gap-6 md:gap-[30px] w-full md:w-[400px]"
        >
          <h1 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[80px] font-bold text-[#00e6e6]">Say Hi!</h1>
          <p className='text-base sm:text-lg md:text-[20px] text-[#D8D8D8]'>Feel free to reach out with any questions or opportunities. I'm always excited to connect and collaborate!</p>

          <div className="contact-details flex flex-col gap-6 md:gap-[30px] text-[#D8D8D8] text-[16px] sm:text-[18px] md:text-[20px]">
            <div className="contact-detail flex items-center gap-4 md:gap-[20px]">
              <img src={mail_icon} alt="mail_icon" /><p>sachinthachamindu26@gamil.com</p>
            </div>
            <div className="contact-detail flex items-center gap-4 md:gap-[20px]">
              <img src={call_icon} alt="call_icon" /><p>+94773234663</p>
            </div>
            <div className="contact-detail flex items-center gap-4 md:gap-[20px]">
              <img src={location_icon} alt="location icon" /><p>Chilaw, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form
         data-aos="fade-left"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          className='contact-right flex flex-col gap-4 md:gap-[20px] w-full md:w-[500px]'
        >
          <label htmlFor="name" className='text-[#D8D8D8] text-base sm:text-lg md:text-[22px] font-semibold'>Your Name</label>
          <input className="border-[2px] md:border-[2px] border-[#00e6e6] w-full h-[45px] sm:h-[50px] md:h-[65px] pl-4 rounded-lg bg-gray-950 text-[#A0A0A0] text-sm sm:text-[18px] md:text-[20px]" type="text" placeholder='Enter your name' name='name' required />

          <label htmlFor="email" className='text-[#D8D8D8] text-base sm:text-lg md:text-[22px] font-semibold'>Your Email</label>
          <input className="border-[2px] md:border-[2px] border-[#00e6e6] w-full h-[45px] sm:h-[50px] md:h-[65px] pl-4 rounded-lg bg-gray-950 text-[#A0A0A0] text-sm sm:text-[18px] md:text-[20px]" type="email" placeholder='Enter your Email' name='email' required />

          <label htmlFor="message" className='text-[#D8D8D8] text-base sm:text-lg md:text-[22px] font-semibold'>Write Your Message here</label>
          <textarea className="border-[2px] md:border-[2px] border-[#00e6e6] w-full h-[120px] sm:h-[130px] md:h-[150px] p-4 rounded-lg bg-gray-950 text-[#A0A0A0] text-sm sm:text-[18px] md:text-[20px]" name='message' placeholder='Enter Your message' required></textarea>

          <button type='submit' className='px-4 sm:px-6 py-2 sm:py-3 bg-transparent text-[#00e6e6] border-2 border-[#00e6e6] rounded-lg text-[15px] font-semibold hover:bg-[#00e6e6] hover:text-white transition-all duration-300 ease-in-out'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
