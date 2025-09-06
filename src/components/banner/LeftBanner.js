import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Cybersecurity Analyst.", "Data Scientist.", "AI/ML Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ibrahim B. Sanusi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <div className="text-base font-bodyFont leading-6 tracking-wide">
          <h3 className="text-xl font-semibold text-designColor mb-2">Motivation</h3>
          <p className="mb-4">
            Driven by the challenge of securing our increasingly interconnected and AI-dependent world. 
            My goal is to contribute impactful research and solutions that fortify critical systems against 
            evolving threats, from adversarial AI to quantum computing vulnerabilities.
          </p>
          
          <h3 className="text-xl font-semibold text-designColor mb-2">Research Interests</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>AI-Powered Cybersecurity (AI Security & Adversarial Machine Learning)</li>
            <li>Blockchain Security & Cryptography</li>
            <li>Critical Infrastructure Protection (Industrial Control Systems, IoT Security)</li>
            <li>Cloud & Edge Computing Security</li>
            <li>Cyber-Physical System Security (Autonomous Vehicles, Drones, Smart Grids)</li>
            <li>Big Data Privacy & Federated Learning</li>
            <li>5G/6G Network Security</li>
            <li>Cyber Warfare & National Security (APT Detection, Threat Intelligence)</li>
            <li>Quantum-Safe Cryptography</li>
            <li>Social Media & Disinformation Defense (Deepfake Detection, Rumor Control)</li>
          </ol>
          
          {/* Download CV Button */}
          <div className="mt-6">
            <a 
              href="https://drive.google.com/file/d/1ZGvlrBY4dXwPHES3coGgjpbdJD2mcVVq/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-designColor text-white font-medium rounded-md hover:bg-opacity-80 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner