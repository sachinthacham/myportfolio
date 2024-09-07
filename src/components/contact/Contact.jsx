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
    <div id="contact"className='contact text-white flex flex-col items-center justify-center gap-[80px]  h-[100vh]'>
      <div className="contact-title relative ">
        <h1 className='px-[30px]  text-[60px] '>Get in Touch</h1>
      </div>
      <div className="contact-section flex gap-[150px] bg-[#22282f] px-[100px] rounded-[20px] pb-[20px] mb-[20px]">
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1, ease: 'easeInOut'}} 
         className="contact-left flex flex-col gap-[30px] w-[400px]">
            <h1 className="text-[80px] font-[700px] bg-clip-text text-transparent bg-gradient-to-r from-[#0096ff] to-[#00d4ff] ">Lets Talk</h1>
            <p className='max-w-[550px] text-[#D8D8D8] text-[20px]'>This implementation will display the icon and, when hovered over, darken the
                 background and show the technology name smoothly.</p>
            <div className="contact-details flex flex-col gap-[30px] text-[#D8D8D8] text-[22px]">

                <div className="contact-detail flex items-center gap-[20px] text-[16px]">
                    <img src={mail_icon} alt="mail_icon"/><p>sachinthachamindu26@gamil.com</p>
                </div>
                <div className="contact-detail flex items-center gap-[20px] text-[16px]">
                    <img src={call_icon} alt="call_icon"/><p>+94773234663</p>
                </div>
               
                <div className="contact-detail flex items-center gap-[20px] text-[16px]">
                    <img src={location_icon} alt="location icon"/><p>Chilaw,Sri lanka</p>
                </div>
               
            </div>
        </motion.div>
        <motion.form 
         whileInView = {{ opacity: 1, x: 0 }}
         initial = {{ opacity: 0, x: 100 }}
         transition = {{ duration: 1, ease: 'easeInOut' }}
        onSubmit={onSubmit} className='contact-right flex flex-col items-start gap-[20px] mt-[20px]'>
            <label htmlFor="" className='text-[#D8D8D8] text-[22px] font-[500]'>Your Name</label>
            <input  className="border-none w-[500px] h-[65px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]"type="text" placeholder='Enter your name' name = 'name' required />

            <label className='text-[#D8D8D8] text-[22px] font-[500]' htmlFor="">Your Email</label>
            <input  className="border-none w-[500px] h-[65px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]" type="email" placeholder='Enter your Email' name='email' required/>

            <label className='text-[#D8D8D8]  font-[500]' htmlFor="">Write Your Message here</label>
            <textarea  className="border-none w-[500px] h-[150px] p-[25px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]" name='message' rows="8" placeholder='Enter Your message' required></textarea>

            <button type='submit' className='inline-block px-6 py-3 bg-transparent text-[#13bbff] border-2 border-[#13bbff] rounded-lg text-[15px] font-semibold   hover:bg-[#13bbff] hover:text-white  z-10 cursor-pointer'>Submit now</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
