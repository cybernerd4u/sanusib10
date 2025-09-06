import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiEthereum, SiRaspberrypi } from "react-icons/si";
import { TbShieldLock } from "react-icons/tb";

const Media = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            FIND ME IN
          </h2>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/s.bsoroibrahim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon" 
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://x.com/cybernerd4u" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon" 
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/in/sbibrahim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon" 
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://github.com/cybernerd4u" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon" 
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="mt-6 xl:mt-0">
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            {/* AI-Powered Cybersecurity */}
            <a 
              href="https://en.wikipedia.org/wiki/Artificial_intelligence_in_cybersecurity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon" 
              title="AI Security"
            >
              <GiArtificialIntelligence />
            </a>

            {/* Blockchain Security */}
            <a 
              href="https://en.wikipedia.org/wiki/Blockchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon" 
              title="Blockchain Security"
            >
              <SiEthereum />
            </a>

            {/* Critical Infrastructure / IoT Security */}
            <a 
              href="https://en.wikipedia.org/wiki/Internet_of_things" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon" 
              title="IoT & ICS Security"
            >
              <SiRaspberrypi />
            </a>

            {/* Quantum-Safe Cryptography */}
            <a 
              href="https://en.wikipedia.org/wiki/Post-quantum_cryptography" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bannerIcon" 
              title="Quantum-Safe Cryptography"
            >
              <TbShieldLock />
            </a>
          </div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Years of Experience */}
        <a 
          href="#resume?section=experience" 
          className="flex flex-col items-center p-4 bg-[#1e2024] rounded-md hover:bg-[#2a2d32] transition-all duration-300"
        >
          <span className="text-3xl font-bold text-designColor">6+</span>
          <span className="text-sm mt-1">Years of Experience</span>
        </a>
        
        {/* Projects Completed */}
        <a 
          href="#projects" 
          className="flex flex-col items-center p-4 bg-[#1e2024] rounded-md hover:bg-[#2a2d32] transition-all duration-300"
        >
          <span className="text-3xl font-bold text-designColor">20</span>
          <span className="text-sm mt-1">Projects Completed</span>
        </a>
        
        {/* Technologies Mastered */}
        <a 
          href="#resume?section=skills" 
          className="flex flex-col items-center p-4 bg-[#1e2024] rounded-md hover:bg-[#2a2d32] transition-all duration-300"
        >
          <span className="text-3xl font-bold text-designColor">15</span>
          <span className="text-sm mt-1">Technologies Mastered</span>
        </a>
        
        {/* Code Commits */}
        <a 
          href="https://github.com/cybernerd4u" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-[#1e2024] rounded-md hover:bg-[#2a2d32] transition-all duration-300"
        >
          <span className="text-3xl font-bold text-designColor">200</span>
          <span className="text-sm mt-1">Code Commits</span>
        </a>
      </div>
    </div>
  )
}

export default Media