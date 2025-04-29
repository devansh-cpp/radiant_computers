import Image from "next/image"; 

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-gray-400 py-12">
        <div className=" max-w-7xl mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5  8 px-4 sm:px-6 lg:px-8">
          <div className="col-span-2">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.88027099964!2d81.74630067596745!3d26.748196567140322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a24ceb694d2ef%3A0xc666b2f23d41e96b!2sRadiant%20Computer%20Institute%20Rudauli!5e0!3m2!1sen!2sin!4v1744521031508!5m2!1sen!2sin" width="100%" height="250"    loading="lazy" ></iframe>  
          </div>
          <div className="sm:mt-0 mt-12">
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:mt-0 mt-12">
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@Rdlradiantcomputer "
                className="hover:text-white transition-colors duration-300"
              >
                Youtube
              </a>
              <a
                href="https://www.instagram.com/radiant_computer_institute?igsh=MWIwczl2ZWdmaTY0NQ== "
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              
            </div>
          </div>
          
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <p>Mohalla Salar , Hajineem </p>
            <p>Rudauli Ayodhya</p>
            <p>Email: radiantcomputerinstitute3@gmail.com </p>
            <p>Phone: +916394807077</p>
          </div>
          <div>
        
          
          </div>
        </div>
        
        <p className="text-center text-xs pt-8">
        © Radiant Computers | All right reserved
        <br /> Developed with ❤️ <a href="https://www.sudoweb.in/" target="#"><u>sudoweb.in</u></a> 
        </p>
      </footer>
    </>
  );
}
