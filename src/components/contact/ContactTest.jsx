import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactTest = () => {
  return (
    <section className='py-6 pt-[70px] overflow-x-hidden' id="contact">
       
        <div className='container mx-auto'>
        {/* <div className="contact-title text-center px-4 md:px-0">
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white'>Let's Build Something Great Together</h1>
      </div> */}
      <div className='flex flex-col-reverse xl:flex-row-reverse gap-[30px] mt-[50px]'>
        <div className='flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0 justify-center  xl:w-[30%]' data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="800">
                <ul className='flex flex-col gap-10  w-[80%]' >
                   <li className='flex items-center gap-6'>
                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-teal-600 dark:text-teal-400 rounded-md flex items-center justify-center'>
                            <div className='text-[28px]'><FaMapMarkerAlt className="text-xl mr-2" /></div>
                        </div>
                        <div className='flex-1'>
                            {/* <p className='text-white'>title 1</p> */}
                            <h3 className='text-[15px] text-white'>Ilippadeniya, chilaw</h3>
                        </div>
                   </li>
                   <li className='flex items-center gap-6'>
                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-teal-600 dark:text-teal-400 rounded-md flex items-center justify-center'>
                            <div className='text-[28px]'> <FaEnvelope className="text-xl mr-2" /></div>
                        </div>
                        <div className='flex-1'>
                            {/* <p className='text-white'>title 1</p> */}
                            <h3 className='text-[15px] text-white'>sachinthachamindu26@gmail.com</h3>
                        </div>
                   </li>
                   <li className='flex items-center gap-6'>
                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-teal-600 dark:text-teal-400 rounded-md flex items-center justify-center'>
                            <div className='text-[28px]'> <FaPhone className="text-xl mr-2" /></div>
                        </div>
                        <div className='flex-1'>
                            {/* <p className='text-white'>title 1</p> */}
                            <h3 className='text-[15px] text-white'>+94 77 323 4663</h3>
                        </div>
                   </li>
                </ul>

            </div>
            <div className='xl:w-[70%] order-2 xl:order:none flex justify-center ' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="800">
                <form className='flex flex-col gap-6 p-10  rounded-xl w-[75%]'>
                    <h3 className='text-4xl text-teal-600 dark:text-teal-400'>Let's work together</h3>
                    <p className='text-white/60'>
                    Feel free to reach out with any questions or opportunities. I'm always excited to connect and collaborate!
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <input type='text' placeholder='FirstName' className='flex h-10 w-full rounded-md px-3 py-2 text-sm border-[2px] border-[#00e6e6] bg-black/0 '/>
                    <input type='text' placeholder='Lastname'  className='flex h-10 w-full rounded-md px-3 py-2 text-sm bg-black/0 border-[2px] border-[#00e6e6] '/>
                    <input type='text' placeholder='Email'  className='flex h-10 w-full rounded-md px-3 py-2 text-sm bg-black/0 border-[2px] border-[#00e6e6] '/>
                    <input type='text' placeholder='Phone Number'  className='flex h-10 w-full rounded-md px-3 py-2 text-sm bg-black/0 border-[2px] border-[#00e6e6] '/>
                    </div>

                    <textarea className='h-[170px] flex min-h-[80px] w-full rounded-md  text-white px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none bg-black/0 border-[2px] border-[#00e6e6] ' placeholder='Type your message here'/>

                    <button type='submit' className='px-2 bg-transparent text-[#00e6e6] border-2 border-[#00e6e6] h-[60px] rounded-lg text-[15px] font-semibold hover:bg-[#00e6e6] hover:text-white transition-all duration-300 ease-in-out'>Submit now</button>

                   
                    
                </form>
            </div>

           

        </div>
        </div>
    </section>
  )
}

export default ContactTest
