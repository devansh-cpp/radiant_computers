"use client";
import { useState, useRef } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwU5TCrdiHGfEVhJBV4fz6HGBzocSY1D2uGOumGYanvdVmCDIK-FucBGIbN4fnyS23jKQ/exec";
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const form = formRef.current;
    const formData = new FormData(form as HTMLFormElement);
  
    const sendForm = async () => {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
      if (result.status === "success") {
        (form as HTMLFormElement).reset();
        return result;
      } else {
        throw new Error("Failed to send message");
      }
    };
  
    toast.promise(
      sendForm(),
      {
        pending: "Sending your contact details",
        success: "Contact details shared",
        error: "Something went wrong!",
      },
      {
        position: "bottom-right",
        autoClose: 3000,
      }
    );
  };

  return (
    <section className="text-gray-600 body-font mt-24 relative" id="contact">
      <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Contact with Us</h1>
        <p className="text-lg text-blue-500 mt-2">
          Get in touch to learn more about Radiant Computer Institute – your
          gateway to future-ready tech skills!
        </p>
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="container px-5 py-6 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14251.52165655089!2d81.748876!3d26.748192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a24ceb694d2ef%3A0xc666b2f23d41e96b!2sRadiant%20Computer%20Institute%20Rudauli!5e0!3m2!1sen!2sin!4v1744544736296!5m2!1sen!2sin"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md z-10">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                Mohalla Salar , Hajineem ,Rudauli
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-blue-500 leading-relaxed">
                radiantcomputerinstititue3@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+916394807077</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We'd love to hear from you!
            </p>
            {["name", "email", "phone", "address", "course"].map((field) => (
              <div className="relative mb-4" key={field}>
                <label
                  htmlFor={field}
                  className="leading-7 text-sm text-gray-600"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            ))}
            <button
              type="submit"
              className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
