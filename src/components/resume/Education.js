import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - Till Date</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PhD. in MIS"
            subTitle="NOUN - Acetel  (In View)"
            result="In-view"
            des="Research Dissertation: Detecting Covert DNS Channels in Critical Infrastructure Using Adversarial Transformer Models."
          />
          <ResumeCard
            title="MSc. - Information Management"
            subTitle="ABU, Zaria, Kaduna, Nigeria. (2022 - 2024)"
            result="Very Good"
            des="Research Thesis: Assessment of the Contribution of Cloud Security to Healthcare Data Privacy and Security in Nigeria."
          />
          <ResumeCard
            title="BTech. in Civil Engineering"
            subTitle="ATBU, Bauchi, Nigeria (2014 - 2019)"
            result="Very Good"
            des="Research Project: Design and Simulation of Hydraulic Spillway Systems for Dams to Determine the Impact of Stress on Peak Flow Conditions."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Publications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Malware Detection in UAV Communication Networks Using Neural Network Architectures and Blockchain-Based Validation Systems"
            subTitle="First Author 'International Journal of Information and Cybersecurity Engineering'"
            des="This paper proposes a deep learning and blockchain-based framework to enhance UAV cybersecurity, improving malware detection, data integrity, and automated threat response in UAV networks."
            link="https://www.ieee.org/publications-research" // Add the actual URL here
          />
          <ResumeCard
            title="Assessment of the Contribution of Cloud Security to Healthcare Data Privacy and Security in Nigeria"
            subTitle="First Author 'International Journal of Information and Cybersecurity Engineering'"
            des="This paper evaluates cloud security measures in Nigeria's Federal Ministry of Health, assessing their impact on data privacy, availability, and challenges. It finds strong security practices and recommends increased funding for improvement."
            link="https://www.cognizancejournal.com/volume-5-issue-8/" // Add the actual URL here
          />
          <ResumeCard
            title="Campus Navigation and Dynamic Display System Using React-Native, JavaScript and Node.JS"
            subTitle="Last Author 'Journal of Software Impacts'"
            des="A system for campus navigation and dynamic display, built using React Native, JavaScript, and Node.js, offering real-time updates and interactive features."
            link="https://www.cognizancejournal.com/volume-5-issue-8/" // Add the actual URL here
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education