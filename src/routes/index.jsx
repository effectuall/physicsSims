import React, { useState, useEffect } from 'react';
import file from '../assets/file.json';

const Route = () => {
  const [files, setFiles] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  // console.log(file)
  useEffect(() => {
    setFiles(file);
  }, []);

  const getName = (file) => {
    const name = file.split('_');
    name.shift();
    return name.join(' ');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <br></br>
      <h2 className="text-3xl md:text-6xl">Physics <span>Interactive 3D </span> <br></br>Simulations</h2>
      <div className="p-4 md:p-12 flex justify-center gap-5">
        <a href="/dashboard" className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Try Simulations</a>
        <a href="#" className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Learn More</a>
      </div>
      <div className="text-sm md:text-md">
        <h1><strong>Effect of Visual Learning - Effectual Learning</strong></h1>
        <h1> Effectual Learning introduces a teaching methodology that uses technology as access points for guiding
          students in science.</h1>

        <div className='lg:px-64'>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2 p-4  shadow-md">
            The interactive features available here, lets the educators and learners to interact
            with the immersive 3D environment.
          </div>
          <div className="w-full md:w-1/2 p-4  shadow-md">
            Useful for all type of learners:- Visual learners, Reading/Writing learners,
            Kinesthetic learners.
          </div>
        </div>
       
        <div className="flex flex-col gap-8 py-4  md:flex-row">
          <div className="w-full md:w-1/2 p-4  shadow-md">
          The 3D interactive simulation modules here, are developed to present the topics and
          concepts in 3D graphics for an in-depth learning experience.
          </div>
          <div className="w-full md:w-1/2 p-4  shadow-md">
          The platform uses 3D models that enables virtual-reality assessment of the formulae,
          laws and theories and allows to comprehend the concepts better.
          </div>
        </div>
        </div>
      </div>

      <div id="row" className="container mx-auto">
        {Object.keys(files).map((key) => (
          <div key={key} className="mb-8">
            <a className="title block text-2xl font-bold mb-4">{key}</a>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {files[key].map((file) => (
                <div key={file} id={file} className="column p-2 shadow-md">
                  <a href={`/dashboard/webpage/:${file}`} rel="noopener noreferrer">
                    <img className="image w-full" src={`../assets/screenshots/${file}.jpg`} alt={getName(file)} loading="lazy" />
                    <div className="middle">
                      <div className="text">{getName(file)}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <footer className="bg-gray-800 text-white text-center p-4">
        <div  id="contact">
           
        <div className="flex md:flex-row flex-col justify-between md:items-center mt-2">
        <ul className="nav-menu flex space-x-4">
          <li>  <h1 className="text-2xl font-bold">
              <a href="/" className="text-blue-700">Effect<span className="text-cyan-600">uall</span></a>
            </h1></li>
              <li >
                <a href="#body" className="text-white-700 hover:text-blue-500">Home</a>
              </li>
              <li>
                <a href="/dashboard" className="text-white-700 hover:text-blue-500">Dashboard</a>
              </li>
              <li>
                <a href="/dashboard/invoices" className="text-white-700 hover:text-blue-500">Invoices</a>
              </li>
             
            </ul>
          <div>
            <div className="flex flex-col md:items-end md:mt-0 mt-6">
          
              <a className="md:mt-0 mt-2" href="mailto:info@effectuall.com">
                info@effectuall.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[0.5px] mb-5 mt-8 bg-white rounded-full" />
      <div className="flex md:flex-row flex-col justify-between pb-8">
        <div>© Copyright 2020-2023 Effectual Learning. All rights reserved</div>
        <div className="flex md:flex-row flex-col md:gap-10 gap-5 md:mt-0 mt-4">
          <Link href="">Submit a feedback</Link>
          <Link href="">Terms</Link>
          <Link href="">Policies</Link>
        </div>
      </div>
    </div> */}
    Follow us on: 
       <div className="container mx-auto mb-8"> 
        <a href="https://www.linkedin.com/company/effectual-learning/" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline">
          LinkedIn
        </a>
        <span className="mx-4">|</span>
        <a href="https://www.facebook.com/profile.php?id=61554729165510" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Facebook
        </a>
        <span className="mx-4">|</span>
        <a href="https://www.instagram.com/effectuallearning" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
          Instagram
        </a>
        <span className="mx-4">|</span>
        <a href="https://www.youtube.com/channel/UCFSMjn_YssD7Y1ybBwZb3mw" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
          YouTube
        </a>
      </div>
       
      Support the work
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="ZTQ5RKXFNFB26" />
        <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_SM.gif" border="0" name="submit"
          title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
       
      </form>

        <div className="container mx-auto">
          <p>&copy; 2024 EffectualL LLC Physics 3D  simulation. All rights reserved.</p>
        </div>
      
      </footer>
        
    </>
  );
};

export default Route; 