import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ibrahim B. Sanusi</h3>
        <p className="text-lg font-normal text-gray-400">
          Cyber Data Analyst
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Highly analytical and detail-driven Data Analyst with over 6 years 
          of experience managing large-scale datasets, developing real-time 
          dashboards, and integrating third-party data sources.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234 8124443445</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ibrahimsanusib10@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a 
            href="https://www.facebook.com/s.bsoroibrahim" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://x.com/cybernerd4u" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.linkedin.com/in/sbibrahim/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="https://github.com/cybernerd4u" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;