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
      <div className="contact-title relative">
        <h1 className='px-[30px] py-[0px] font-[600] bg-clip-text bg-orange-400'>Get in Touch</h1>
       
      </div>
      <div className="contact-section flex gap-[150px]">
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1, ease: 'easeInOut' }} 
         className="contact-left flex flex-col gap-[30px] w-[400px] ">
            <h1 className="text-[80px] font-[700px]  ">Lets Talk</h1>
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
        onSubmit={onSubmit} className='contact-right flex flex-col items-start gap-[30px]'>
            <label htmlFor="" className='text-[#D8D8D8] text-[22px] font-[500]'>Your Name</label>
            <input  className="border-none w-[500px] h-[65px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]"type="text" placeholder='Enter your name' name = 'name' />

            <label className='text-[#D8D8D8] text-[22px] font-[500]' htmlFor="">Your Email</label>
            <input  className="border-none w-[500px] h-[65px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]" type="email" placeholder='Enter your Email' name='email' />

            <label className='text-[#D8D8D8]  font-[500]' htmlFor="">Write Your Message here</label>
            <textarea  className="border-none w-[500px] h-[150px] p-[25px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]" name='message' rows="8" placeholder='Enter Your message'></textarea>

            <button type='submit' className='contact-submit bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Submit now</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
