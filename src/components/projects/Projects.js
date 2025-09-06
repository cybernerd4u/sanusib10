import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        {/* Completed Projects */}
        <ProjectsCard
          title="YouTube Q/A Summarizer"
          des="An AI app for automatic YouTube video summarization and Q/A using IBM Granite LLM, LangChain, FAISS-based RAG, and Whisper fallback transcription."
          src={projectOne}
          githubLink="https://github.com/cybernerd4u/YouTube-Summarization-and-Q-A-with-Granite-LangChain-and-RAG" // Replace with actual GitHub link
          portfolioLink="https://yourportfolio.com/youtube-qa-summarizer" // Replace with actual portfolio link
        />
        <ProjectsCard
          title="RAG - Llama, Watsonx"
          des="Built a RAG pipeline using IBM watsonx.ai and Llama 3 405B Instruct to process Wikipedia data, store embeddings in Chroma, and generate context-aware answers."
          src={projectTwo}
          githubLink="https://github.com/cybernerd4u/RAG-Llama-Watsonx-A-Retrieval-Augmented-Generation-System-with-IBM-watsonx.ai" // Replace with actual GitHub link
          portfolioLink="https://yourportfolio.com/rag-llama-watsonx" // Replace with actual portfolio link
        />
        <ProjectsCard
          title="Docs Summarizer"
          des="Developed a smart agent with IBM watsonx.ai, LangChain, and RAG to manage private documents, enabling retrieval, summarization, and interaction recall."
          src={projectThree}
          githubLink="https://github.com/cybernerd4u/Summarize-private-documents-using-RAG-LangChain-and-LLMs" // Replace with actual GitHub link
          portfolioLink="https://yourportfolio.com/docs-summarizer" // Replace with actual portfolio link
        />

        {/* Ongoing Projects */}
        <ProjectsCard
          title="Aegis-ICS"
          des="Working on industrial control system security with AI-driven resilience mechanisms."
          src={projectFour}
          githubLink="https://github.com/ibrahim-security-lab/aegis-ics" // Replace with actual GitHub link
          portfolioLink="https://yourportfolio.com/aegis-ics" // Replace with actual portfolio link
        />
        <ProjectsCard
          title="DeepTrust Studio"
          des="Building an AI-powered trust and verification platform for secure data pipelines and decision-making systems."
          src={projectFive}
          githubLink="https://github.com/ibrahim-security-lab/deeptrust-studio" // Replace with actual GitHub link
          portfolioLink="https://yourportfolio.com/deeptrust-studio" // Replace with actual portfolio link
        />
        <ProjectsCard
          title="PQShield Edge"
          des="Developing post-quantum cryptography solutions for edge devices and secure communications."
          src={projectSix}
          githubLink="https://github.com/ibrahim-security-lab/pqshield-edge" // Replace with actual GitHub link
          portfolioLink="https://yourportfolio.com/pqshield-edge" // Replace with actual portfolio link
        />

      </div>
    </section>
  );
}

export default Projects