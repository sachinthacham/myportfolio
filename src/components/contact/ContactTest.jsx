import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactTest = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Make sure the form field names match what Web3Forms expects
    formData.append("access_key", "c405c52f-a6c2-406c-913b-68120f554f71");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const data = await res.json();
      if (data.success) {
        console.log("Success:", data);
      } else {
        console.log("Error:", data); // Log the error if submission fails
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <section className=" pt-[70px] overflow-x-hidden" id="contact">
      <div className="container mx-auto ">
        <div className="flex flex-col-reverse xl:flex-row-reverse gap-[30px] mt-[50px] bg-[#232323] py-6">
          <div className="flex-1  xl:ml-[-30px]  flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0 justify-center xl:w-[30%]">
            <ul className="flex flex-col gap-10 w-[80%]">
              <li className="flex items-center gap-6 ">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] text-[#ff014f] rounded-md flex items-center justify-center">
                  <FaMapMarkerAlt className="text-xl mr-2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[12px] sm:text-[15px] text-white">Ilippadeniya, Chilaw</h3>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] text-[#ff014f] rounded-md flex items-center justify-center">
                  <FaEnvelope className="text-xl mr-2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[12px] sm:text-[15px] text-white">sachinthachamindu26@gmail.com</h3>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] text-[#ff014f] rounded-md flex items-center justify-center">
                  <FaPhone className="text-xl mr-2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[12px] sm:text-[15px] text-white">+94 77 323 4663</h3>
                </div>
              </li>
            </ul>
          </div>

          <div className="xl:w-[70%] order-2 xl:order-none flex justify-center">
            <form className="flex flex-col gap-6 p-2 xl:p-4 xl:my-6  rounded-xl w-[75%] bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]" onSubmit={onSubmit}>
              <h3 className="text-4xl text-white">Get in touch with me <span className='text-[#ff014f] sm:text-5xl font-bold'>now!</span></h3>
              <p className="text-white/60">
                Feel free to reach out with any questions or opportunities. I'm always excited to connect and collaborate!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                <input
                  type="text"
                  name="first_name" // Adding correct name attribute
                  placeholder="FirstName"
                  className="flex h-10 w-full rounded-md px-3 py-2 text-sm  bg-[#292929] "
                  required
                />
                <input
                  type="text"
                  name="last_name" // Adding correct name attribute
                  placeholder="Lastname"
                  className="flex h-10 w-full rounded-md px-3 py-2 text-sm bg-[#292929]  "
                  required
                />
                <input
                  type="email"
                  name="email" // Adding correct name attribute
                  placeholder="Email"
                  className="flex h-10 w-full rounded-md px-3 py-2 text-sm bg-[#292929] "
                  required
                />
                 <input
                  type="text"
                  name="phone" // Adding correct name attribute
                  placeholder="Pnone Number"
                  className="flex h-10 w-full rounded-md px-3 py-2 text-sm bg-[#292929] "
                  required
                />
              </div>

              <textarea
                name="message" // Adding correct name attribute
                className="h-[170px] flex min-h-[80px] w-full rounded-md text-white px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none bg-[#292929]  "
                placeholder="Type your message here"
                required
              />

              <button
                type="submit"
                className="px-2 bg-transparent border-[#ff014f] text-[#ff014f] border-2 h-[60px] rounded-lg text-[15px] font-semibold  hover:text-white hover:bg-[#ff014f] transition-all duration-300 ease-in-out"
              >
                Submit now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTest;
