import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col md:flex-row gap-12 md:gap-20"
    >
      {/* Job Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-10 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT Infrastructure O&M Engineer – Team Lead"
            subTitle="Huawei Technologies Co. Nigeria Limited - (Oct. 2021 - Present)"
            result="Nigeria"
            des={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Led enterprise ICT projects in cloud, security, and infrastructure solutions.</li>
                <li>Coordinated cross-functional teams to resolve architectural dependencies.</li>
                <li>Drove pre-sales design for major clients including Central Bank of Nigeria.</li>
                <li>Mentored junior engineers and fostered knowledge transfer culture.</li>
              </ul>
            }
          />
          <ResumeCard
            title="IT Support (Internship)"
            subTitle="Huawei Technologies Co. Nigeria Limited - (Feb. 2020 - Feb. 2021)"
            result="Nigeria"
            des={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Implemented IT security controls and access management protocols.</li>
                <li>Conducted security audits and asset tracking to improve infrastructure.</li>
              </ul>
            }
          />
          <ResumeCard
            title="Cybersecurity Analyst (Internship)"
            subTitle="Senselearner Technologies Pvt. Ltd - (Sep. 2023 - Dec. 2023)"
            result="India"
            des={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Conducted vulnerability assessments using Nessus and Metasploit.</li>
                <li>Supported SOC activities and documented penetration testing outcomes.</li>
              </ul>
            }
          />
          <ResumeCard
            title="Technical Design Engineer (Internship)"
            subTitle="China Civil Engineering Construction Corporation - (Sep. 2017 - Mar. 2018)"
            result="Nigeria"
            des={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Assisted in designing structural components for infrastructure projects.</li>
                <li>Prepared technical documentation and design specifications.</li>
                <li>Participated in site inspections and quality assurance checks.</li>
                <li>Collaborated with senior engineers on project planning.</li>
              </ul>
            }
          />
        </div>
      </div>

      {/* Trainer Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-10 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certification Trainer"
            subTitle="Huawei Technologies Nigeria (2015 - 2020)"
            result="Nigeria"
            des={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Develop and deliver customized Huawei ICT training programs.</li>
                <li>Teach certification courses on key technologies and solutions.</li>
                <li>Validate customer expertise through official Huawei assessments.</li>
                <li>Provide expert guidance on implementation and best practices.</li>
              </ul>
            }
          />
          <ResumeCard
            title="Research Assistant"
            subTitle="Faculty of Eng. ATBU (2017 - 2020)"
            result="Nigeria"
            des={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Coached and mentored prospective undergraduates.</li>
                <li>Prepared academic materials and organized tutorials.</li>
                <li>Supported to review student projects and provided feedback.</li>
                <li>Setup and operated lab experiments, collecting data.</li>
              </ul>
            }
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2013 - 2015)"
            result="Nigeria"
            des={
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Developed lesson plans for mathematics and computer science.</li>
                <li>Implemented technology integration in classroom teaching.</li>
                <li>Advised student technology club and science fair projects.</li>
                <li>Collaborated with parents to support student development.</li>
              </ul>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;