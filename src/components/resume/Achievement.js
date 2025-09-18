import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col md:flex-row gap-8 md:gap-20"
    >
      {/* Professional Certifications and Awards */}
      <div className="w-full md:w-1/2">
        <div className="py-6 md:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Certifications and Awards</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Security Certifications"
            subTitle="Cybersecurity Excellence"
            result="Certified"
            des={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1_hMSOOZfgsPxNKRoC7oQP-rv7N2QeSLj/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Huawei Certified Security - Professional (HCIP - Security)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1EreEztejnvC1aITvOxaAmdWXKSJQUfHj/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Alibaba Cloud Associate Cloud Security
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/c6a3787c-3c19-4b03-8fa2-e8957520a934/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Microsoft Certified: Security, Compliance, and Identity Fundamentals
                  </a>
                </li>
                <li>
                  <a 
                    href="https://education.securiti.ai/verification/139505B44-13950368B-1332C1AC4/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    AI Security and Governance
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1k8V8c-C6z2kKCbTYJ1XlaTT_GP7InIcu/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Stellar Cyber Certified Associate (SCCA)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://verify.skilljar.com/c/qtgrg9giaw4h" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    SailPoint Identity Security Leader
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/9983d57e-1bb7-4036-b43a-083f73003f31/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                     ISO/IEC 27001:2022 Lead Auditor
                  </a>
                </li>
              </ul>
            }
          />
          <ResumeCard
            title="Cloud Certifications"
            subTitle="Cloud Infrastructure Expertise"
            result="Certified"
            des={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a 
                    href="https://drive.google.com/file/d/17VrIyw6I5RgdfeLO_VhJyi-p_aXUdQJG/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Huawei Certified Cloud Computing - Associate
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1w5qRPPLPau8hh5kr9tCKwrdbxKnb9llI/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Huawei Certified Storage - Professional (HCIP - Storage)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1RSeHvY_x8f7LJrTLiGORzJPfrbVH04iZ/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Alibaba Cloud Associate Cloud Computing
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1Fof5L2XLpRyoYR_A1S3M6MLG4VKeryDo/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Alibaba Cloud Certified Developer
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1Jf8r8bNseJr-K3dQBTIxrIHBFpZQ9Ad_/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Alibaba Cloud Certified Associate System Operator
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/1417b753-a8c7-4cfd-bd88-a4ddc669b688/linked_in_profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    AWS Certified Cloud Practitioner certificate
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/6d8dcbb9-70b9-47d5-b4e6-f65c16275891/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Microsoft Certified: Azure Fundamentals
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/df82ab2a-a381-4cdf-97bc-2ff4b2ab489e/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Aviatrix Certified Multicloud Network Associate
                  </a>
                </li>
              </ul>
            }
          />
          <ResumeCard
            title="AI/ML and Data Science"
            subTitle="Data Science and AI/ML Analysis"
            result="Certified"
            des={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a 
                    href="https://www.credly.com/badges/68cdeb01-b2e6-40fb-9d68-c79ec4975c9e/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Google Cloud Certified - Professional Machine Learning Engineer
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.datacamp.com/certificate/AEDS0017874969038" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    DataCamp Certified AI Engineer for Data Scientists Associate
                  </a>
                </li>
                <li>
                  <a 
                    href="https://achieve.snowflake.com/0ee032fe-45c7-4bfc-ae4f-7da2b48812f9#acc.ksimZAj4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    SnowPro Associate: Platform Certification
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credential.net/167ca7e0-639f-45c5-9095-818faa893952#acc.hW8ZQekz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Confluent Certified Data Streaming Engineer
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/a8b04add-d09e-420f-8ceb-0e8c160ed004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Basic Proficiency in KNIME Analytics Platform
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1Z0LVXeuXocecirxLsp38j9N1A9V0YBjG/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Salesforce Certified Agentforce Specialist
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/ec1043b4-1225-44a2-9c3e-39ff95c990b6/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Microsoft Certified: Azure AI Fundamentals
                  </a>
                </li>
                <li>
                  <a 
                    href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=1003413F51534D9CD913FAB3679B10B5294CA839D627BB2FE68868720CE2EA70" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Oracle AI Vector Search Certified Professional
                  </a>
                </li>
                <li>
                  <a 
                    href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=116CFF58F637B5280B052970DDD4227BBD185751612CCA67D1698CC4E29FEFD8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Oracle Certified Data Science Professional
                  </a>
                </li>
                <li>
                  <a 
                    href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=5EEBF529582FB15F221E764365E30333C06885B0E994EC32CD8A4EF8C886DFF8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Oracle Certified Generative AI Professional
                  </a>
                </li>
                <li>
                  <a 
                    href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=EBF3ABAA868DCB97A2D13029C6B3ACDAFD895BEF34BDA4D42A3C3CBAA0FE540C" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Oracle Certified AI Foundations Associate
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/c918d75b-ebec-4512-affd-724260182e27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    IBM Certified Quantum Machine Learning
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/6f121768-c43b-4ce5-b317-6a31feabf65d/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    IBM Certified Variational Algorithm Design
                  </a>
                </li>
              </ul>
            }
          />
        </div>
      </div>

      {/* Trainings and Workshops */}
      <div className="w-full md:w-1/2">
        <div className="py-6 md:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainings and Online Courses</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="General IT Training"
            subTitle="IT Diverse Learning"
            result="Completed"
            des={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a 
                    href="https://www.credly.com/badges/8f64d79f-7e50-4e4a-9ca9-11b16f85f9e1/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: NITDA Cybersecurity Professional 
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/cc24145c-e093-4e45-a255-374319dab703/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: NITDA Cybersecurity Associate
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/63105291-57e8-4fee-af88-d155bb72bf80/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Cisco: Cyber Threat Management
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/7a256565-5515-4b0f-aba3-ff60fdfe0cf2/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    OPSWAT File Security Associate (OFSA)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/5fea727c-f78c-4d4c-b80b-20a07a4194ba/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    OPSWAT Introduction to Critical Infrastructure Protection (ICIP)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/e9ba77ef-7694-40e6-ac8f-43f98246fe05/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Foundations of Operationalizing MITRE ATT&CK
                  </a>
                </li>
                <li>
                  <a 
                    href="https://badges.plus.columbia.edu/73a6d719-515e-4b18-8910-08f91a4b225d#acc.1hBCKX5I" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Columbia+: Machine Learning 1
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/1df6c6d3-8c79-40f3-99a1-b49497bc818" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Cisco: Network Support and Security
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.udacity.com/certificate/CHNGKHWU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Udacity: Cloud Developer Nano Degree
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1R_TPIrxLqYSpZBMdqJTmfyuJipuw8iIR/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    IIOE: Cloud Essentials for Higher Education Workforce
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/ai-engineer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: IBM AI Engineering
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/ibm-data-engineer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: IBM Data Engineering
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/google-business-intelligence" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: Google Data Analytics
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/specializations/big-data" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: Big Data Specialization
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/learn/python-for-applied-data-science-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: Python for Data Science, AI & Development
                  </a>
                </li>
              </ul>
            }
          />
          <ResumeCard
            title="Business Strategy"
            subTitle="Pre-Sales & Marketing Ability"
            result="Completed"
            des={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a 
                    href="https://www.credly.com/badges/e0698545-4da4-43cd-b4bb-767f87504823" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Certiprof: Digital Marketing Learner
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/bef2b939-220b-415d-bcda-f25c62b84e64" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Certiprof: Business Agility Learner
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/google-digital-marketing-ecommerce" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: Google Digital Marketing & E-commerce
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/sap-business-analyst" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: SAP Business Analyst
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/sap-business-analyst" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: Adobe Marketing Specialist
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/google-business-intelligence" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: Google Business Intelligence
                  </a>
                </li>
              </ul>
            }
          />
          <ResumeCard
            title="Leadership & Management"
            subTitle="Team Leadership Excellence"
            result="Completed"
            des={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/google-project-management" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: Google Project Management
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/specializations/strategic-leadership" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: Strategic Leadership and Management
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/ibm-project-manager" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: IBM Project Manager 
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.coursera.org/programs/nitda-gen-ai-for-all-n27kb/professional-certificates/ibm-ai-product-manager" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Coursera: IBM AI Product Manager 
                  </a>
                </li>
              </ul>
            }
          />
          <ResumeCard
            title="Professional Memberships"
            subTitle="Career and Research Institutes"
            result="Member"
            des={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1UQXP-oUBvR6bLnjuQ02-Vricx0HfYMmT/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    International Statistcal Engineering Association (ISEA)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1TNm0Ykf53XFvAvPwhKc3g6BCsM8ahvxO/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Institute for Educational Research and Publication (IFERP)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1j24ek2RW_brYSLD20WekbEr9R0Krz-Nk/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    The International Association of Engineers (IAENG)
                  </a>
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;