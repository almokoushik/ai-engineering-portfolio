"use client";
import Head from "next/head";
import { useRef, useState, useContext, createContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { AiFillThunderbolt, AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";
import { BsMoon, BsSun } from "react-icons/bs";

// demo images

const logo = "https://i.ibb.co.com/h1L1kdBX/logo.png";
const profileImg = "https://i.ibb.co.com/JjLZxgjt/Almo-1-removebg-preview-1.png";
const amazonImg = "https://i.ibb.co.com/N2cmHxXb/Agentic-AI-Chatbot-Using-Lang-Graph-Streamlit-03-13-2026-10-54-PM.png";
const cyberImg = "https://i.ibb.co.com/ZzpYZ5RM/ann-from-zero.png";
// const noorShop = "https://i.ibb.co.com/QjfYH9M9/noorShop.png";
const noorShop = "https://i.ibb.co.com/0jZsLh8n/";

// Theme management for both dark and light
const darkTheme = {
  "--background": "#0a192f",
  "--text-primary": "#ccd6f6",

  "--text-secondary": "#8892b0",
  "--accent": "#64ffda",
  "--bg-card": "#112240",

  "--line": "#374151",
  "--hover-bg": "rgba(100,255,218,0.1)",
  "--close-hover": "#ef4444",

  "--border": "#3f3f46",
  "--icon": "#e4e4e7",

  "--scrollbar-indentify": "rgba(136,146,176,0.2)",
  "--scrollbar-thumbnail": "rgba(136,146,176,0.6)",
  "--bg-overlay": "rgba(100,255,218,0.2)",
};

const lightTheme = {
  "--background": "gray-800", 

  "--text-primary": "nvay", 
  "--text-secondary": "black", 
  "--accent": "#64ffda", 

  "--bg-card": "#f8fafc", 
  "--line": "#e5e7eb", 

  "--hover-bg": "rgba(100,255,218,0.1)", 
  "--close-hover": "#dc2626", 
  "--border": "#e5e7eb", 
  "--icon": "#6b7280", 
  "--scrollbar-indentify": "rgba(107,114,128,0.2)", 
  "--scrollbar-thumbnail": "rgba(107,114,128,0.6)", 
  "--bg-overlay": "rgba(100,255,218,0.2)", 
};

// Theme
const ThemeContext = createContext({
  theme: darkTheme,
  isDarkTheme: true,
  toggleTheme: () => {},
});

// Work at splash
const Splash = () => {
  return (
    //Wrapped with motion animation
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3
        className="flex gap-1"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1.25rem",
          // using predefined vars
          color: "var(--text-primary)",
        }}
      >
        Independent Contractor
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          @Outlier.ai
        </span>
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          marginTop: "0.25rem",
          fontWeight: 500,
          color: "var(--text-secondary)",
        }}
      >
        Dec 2024 - June 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Reviewed and optimized AI-generated code in Java, Python, JavaScript, and C++, ensuring correctness, performance, and adherence to best practices.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Delivered structured feedback on algorithms, edge cases, time/space complexity, and code quality, improving overall model response accuracy.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Designed real-world coding challenges spanning data structures, algorithms, and backend logic to enhance AI reasoning capabilities.
        </li>
      </ul>
    </motion.div>
  );
};

//Work at react

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3
        className="flex gap-1"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1.25rem",
          color: "var(--text-primary)",
        }}
      >
        AI Systems & Environment
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          Management
        </span>
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          marginTop: "0.25rem",
          fontWeight: 500,
          color: "var(--text-secondary)",
        }}
      >
        Ongoing
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Managed Python environments (pip, venv) across multiple AI projects to handle dependencies and maintain stable development environments.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Debugged runtime issues, dependency conflicts, and version mismatches while integrating AI frameworks and backend services.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Explored open-source AI repositories on GitHub to understand architecture, setup procedures, and implementation details.
        </li>
      </ul>
    </motion.div>
  );
};


//Work at Google
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3
        className="flex gap-1"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1.25rem",
          color: "var(--text-primary)",
        }}
      >
        Research & Experimentation
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          Focus
        </span>
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          marginTop: "0.25rem",
          fontWeight: 500,
          color: "var(--text-secondary)",
        }}
      >
        Ongoing
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Regularly experiment with modern AI tools, APIs, and frameworks to understand system behavior and performance limitations.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Explore AI repositories and documentation to learn implementation details and integration techniques.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Interested in advancing knowledge in AI infrastructure, GPU-based model deployment, and open-source AI systems.
        </li>
      </ul>
    </motion.div>
  );
};


//Wrok at Apple
const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3
        className="flex gap-1"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1.25rem",
          color: "var(--text-primary)",
        }}
      >
        Technical Skills
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          Proficiency
        </span>
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          marginTop: "0.25rem",
          fontWeight: 500,
          color: "var(--text-secondary)",
        }}
      >
        Languages: C++, Python, JavaScript
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          AI/ML tools: LangChain, LangGraph, Streamlit, Groq API, Gemini API, Open-source LLMs, LM Studio
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Backend & Databases: Django, FastAPI, SQL, MySQL, MongoDB, Vector Databases
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          DevOps & Deployment: AWS, Google Cloud, Git, GitHub, Linux, Virtual Environments (pip, venv)
        </li>
      </ul>
    </motion.div>
  );
};


// Work at Amazon 
const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3
        className="flex gap-1"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1.25rem",
          color: "var(--text-primary)",
        }}
      >
        Education
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          Background
        </span>
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          marginTop: "0.25rem",
          fontWeight: 500,
          color: "var(--text-secondary)",
        }}
      >
        BSc in Computer Science & Engineering (CSE), 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Rajshahi University of Engineering & Technology (RUET)
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Coursework: Data Structures, Algorithms, Machine Learning, Neural Networks, Data Mining, Image & Signal Processing
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Strong foundation in software engineering, system design, and computer systems principles
        </li>
      </ul>
    </motion.div>
  );
};

//Right panel with email

const RightSide = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-end gap-6"
      style={{ color: "var(--text-primary)" }}
    >
      <a href="mailto:mottaki567@gmail.com">
        <p
          className="text-sm rotate-90 w-72 tracking-widest"
          style={{ color: "var(--accent)" }}
        >
          mottaki567@gmail.com
        </p>
      </a>
      <span
        className="w-[2px] h-32 inline-flex"
        style={{ backgroundColor: "var(--text-secondary)" }}
      ></span>
    </div>
  );
};

// Footer Section 

const Footer = () => {
  return (
    <div className="hidden md:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span
          className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer"
          style={{
            backgroundColor: "var(--background)",
            border: "1px solid var(--border)",
            color: "var(--icon)",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-0.5rem)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--icon)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <TbBrandGithub />
        </span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span
          className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer"
          style={{
            backgroundColor: "var(--background)",
            border: "1px solid var(--border)",
            color: "var(--icon)",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-0.5rem)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--icon)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <SlSocialYoutube />
        </span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span
          className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer"
          style={{
            backgroundColor: "var(--background)",
            border: "1px solid var(--border)",
            color: "var(--icon)",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-0.5rem)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--icon)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span
          className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer"
          style={{
            backgroundColor: "var(--background)",
            border: "1px solid var(--border)",
            color: "var(--icon)",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-0.5rem)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--icon)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <SlSocialFacebook />
        </span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span
          className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer"
          style={{
            backgroundColor: "var(--background)",
            border: "1px solid var(--border)",
            color: "var(--icon)",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-0.5rem)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--icon)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <SlSocialInstagram />
        </span>
      </a>
    </div>
  );
};


//Contact section
const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto py-10 flex flex-col gap-4 items-center justify-center"
      style={{ maxWidth: "1140px" }}
    >
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
        }
      `}</style>
      <p
        className="text-lg flex items-center"
        style={{
          fontFamily: "Inter, sans-serif",
          color: "var(--accent)",
          fontWeight: 600,
          letterSpacing: "0.05em",
        }}
      >
        04. What’s Next?
      </p>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
          color: "var(--text-primary)",
        }}
      >
        Get In Touch
      </h2>
      <p
        className="max-w-[600px] text-center"
        style={{ color: "var(--text-secondary)" }}
      >
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a href="mailto:mottaki567@gmail.com">
        <button
          className="w-40 h-14 text-sm rounded-md"
          style={{
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.1em",
            marginTop: "1.5rem",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--hover-bg)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          Say Hello
        </button>
      </a>
    </section>
  );
};

// Single Archieve CArd section

const ArchiveCard = ({ title, des, listItem, link }) => {
  return (
    <a href={link} target="_blank">
      <div
        className="w-full h-80 rounded-lg p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="flex justify-between items-center">
          <FaRegFolder
            className="text-4xl"
            style={{ color: "var(--accent)" }}
          />
          <RxOpenInNewWindow
            className="text-2xl"
            style={{ color: "var(--text-secondary)", transition: "color 0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          />
        </div>
        <div>
          <h2
            className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-[var(--accent)]"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h2>
          <p
            className="text-sm mt-3"
            style={{ color: "var(--text-secondary)" }}
          >
            {des}
          </p>
        </div>
        <ul
          className="text-xs mdl:text-sm flex items-center gap-2 justify-between flex-wrap"
          style={{ color: "var(--text-secondary)" }}
        >
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};


//Archieve Section 
const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="max-w-contentContainer mx-auto px-4 py-24 lg:px-20"
      style={{ maxWidth: "1440px" }}
    >
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
        }
      `}</style>
      <div className="w-full flex flex-col items-center">
        <h2
          className="text-3xl font-titleFont font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Other AI Projects & Experiments
        </h2>
        <p
          className="text-sm font-titleFont"
          style={{ color: "var(--accent)" }}
        >
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10">
        <ArchiveCard
          title="Vector Database Integration"
          des="Implemented efficient vector indexing and semantic search using FAISS and Pinecone for retrieval-augmented generation (RAG) systems."
          listItem={["Python", "FAISS", "Pinecone", "Embeddings"]}
          link="#"
        />
        <ArchiveCard
          title="LLM Fine-tuning Framework"
          des="Built a framework for fine-tuning large language models with configurable training pipelines, hyperparameter optimization, and evaluation metrics."
          listItem={["Python", "PyTorch", "HuggingFace", "Optuna"]}
          link="#"
        />
        <ArchiveCard
          title="Prompt Engineering Toolkit"
          des="Developed a suite of tools for prompt optimization, few-shot learning, and chain-of-thought prompting strategies for improved LLM performance."
          listItem={["Python", "LangChain", "OpenAI API", "Testing"]}
          link="#"
        />
        <ArchiveCard
          title="Model Evaluation Pipeline"
          des="Created comprehensive evaluation frameworks for assessing model performance, bias detection, and generating detailed evaluation reports."
          listItem={["Python", "BLEU", "ROUGE", "Custom Metrics"]}
          link="#"
        />
        <ArchiveCard
          title="Semantic Search Engine"
          des="Built a semantic search engine using transformer embeddings and approximate nearest neighbor algorithms for fast retrieval."
          listItem={["Python", "Transformers", "Annoy", "Flask"]}
          link="#"
        />
        <ArchiveCard
          title="Distributed Training System"
          des="Implemented distributed training across multiple GPUs using PyTorch DistributedDataParallel with automatic mixed precision."
          listItem={["Python", "PyTorch", "NCCL", "GPU Optimization"]}
          link="#"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Attention Mechanism Visualization"
                des="Built interactive visualizations for understanding attention mechanisms in transformer models using attention head analysis."
                listItem={["Python", "Transformers", "Plotly", "Jupyter"]}
                link="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Noor Online Shopping Store"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                link="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Personalized Blog"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                link="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Shoppers Online Shopping Market"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                link="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Single Page Personalized Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Nextjs Dynamic Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Bazaar - A Modern Shopping app"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Blog101 Application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="#"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Todo application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="#"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-[13px]"
            style={{
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--hover-bg)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-[13px]"
            style={{
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--hover-bg)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <section
      id="project"
      className="mx-auto py-24 lg:px-20"
      style={{ maxWidth: "1440px" }}
    >
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
        }
      `}</style>
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative"
            href="https://github.com"
            target="_blank"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="Agentic AI Chatbot"
              />
              <div
                className="absolute w-full h-full rounded-lg top-0 left-0"
                style={{
                  backgroundColor: isHovered1
                    ? "transparent"
                    : "var(--hover-bg)",
                  transition: "background-color 0.3s",
                }}
              ></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p
                className="text-sm tracking-wide"
                style={{
                  color: "var(--accent)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Featured Project
              </p>
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Agentic AI Chatbot Platform
              </h3>
            </div>
            <p
              className="text-sm md:text-base p-2 md:p-6 rounded-md"
              style={{
                backgroundColor: "var(--bg-card)",
                color: "var(--text-secondary)",
              }}
            >
              A modular AI chatbot system integrating LangGraph-based agent architecture for dynamic reasoning workflows. Built with advanced authentication, real-time quota management, and optimized database indexing for <span style={{ color: "var(--accent)" }}>80%+ latency reduction</span>.
            </p>
            <ul
              className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <li>Python</li>
              <li>LangGraph</li>
              <li>MongoDB</li>
              <li>Streamlit</li>
              <li>LLM APIs</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/almokoushik/agentic-ai-chatbot"
                target="_blank"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                target="_blank"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="https://agentic-ai-chatbot-lgpcfbeg7h2aasp7umbld2.streamlit.app/"
                target="_blank"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com"
            target="_blank"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="Machine Learning Project"
              />
              <div
                className="absolute w-full h-full rounded-lg top-0 left-0"
                style={{
                  backgroundColor: isHovered2
                    ? "transparent"
                    : "var(--hover-bg)",
                  transition: "background-color 0.3s",
                }}
              ></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p
                className="text-sm tracking-wide"
                style={{
                  color: "var(--accent)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                AI Research Project
              </p>
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Neural Network Implementations
              </h3>
            </div>
            <p
              className="text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16"
              style={{
                backgroundColor: "var(--bg-card)",
                color: "var(--text-secondary)",
              }}
            >
              Comprehensive implementations of deep learning architectures and <span style={{ color: "var(--accent)" }}>neural network models</span> for research. Includes basic artificial neural network with performance optimizations.
            </p>
            <ul
              className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <li>Python</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>NumPy</li>
              <li>GPU Optimization</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/almokoushik/ANN-From-Zero"
                target="_blank"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://github.com/almokoushik/ANN-From-Zero"
                target="_blank"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="https://github.com/almokoushik/ANN-From-Zero"
                target="_blank"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative"
            href="https://github.com/almokoushik/ANN-From-Zero"
            target="_blank"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={noorShop}
                alt="AI Research Project"
              />
              <div
                className="absolute w-full h-full rounded-lg top-0 left-0"
                style={{
                  backgroundColor: isHovered3
                    ? "transparent"
                    : "var(--hover-bg)",
                  transition: "background-color 0.3s",
                }}
              ></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p
                className="text-sm tracking-wide"
                style={{
                  color: "var(--accent)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                MLOps Project
              </p>
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                LLM Deployment Pipeline
              </h3>
            </div>
            <p
              className="text-sm md:text-base p-2 md:p-6 rounded-md"
              style={{
                backgroundColor: "var(--bg-card)",
                color: "var(--text-secondary)",
              }}
            >
              End-to-end pipeline for deploying large language models with containerization, monitoring, and <span style={{ color: "var(--accent)" }}>GPU optimization</span>. Supports model versioning, A/B testing frameworks, and real-time inference with built-in logging and error recovery mechanisms.
            </p>
            <ul
              className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <li>Python</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>FastAPI</li>
              <li>MLflow</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                style={{
                  color: "var(--text-secondary)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


//Experience Section 
const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleApple = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleSplash = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };

  const handleAmazon = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };

  return (
    <section
      id="experience"
      className="mx-auto py-10 px-4"
      style={{ maxWidth: "768px" }}
    >
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
        }
      `}</style>
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd ? "text-teal-400" : ""
            } border-l-2 py-3 text-sm cursor-pointer`}
            style={{
              borderLeftColor: workReactbd
                ? "var(--accent)"
                : "var(--hover-bg)",
              color: workReactbd ? "var(--accent)" : "var(--text-secondary)",
              backgroundColor: "transparent",
              paddingLeft: "2rem",
              fontWeight: 500,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg-card)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            RactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle ? "text-teal-400" : ""
            } border-l-2 py-3 text-sm cursor-pointer`}
            style={{
              borderLeftColor: workGoogle ? "var(--accent)" : "var(--hover-bg)",
              color: workGoogle ? "var(--accent)" : "var(--text-secondary)",
              backgroundColor: "transparent",
              paddingLeft: "2rem",
              fontWeight: 500,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg-card)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Research
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple ? "text-teal-400" : ""
            } border-l-2 py-3 text-sm cursor-pointer`}
            style={{
              borderLeftColor: workApple ? "var(--accent)" : "var(--hover-bg)",
              color: workApple ? "var(--accent)" : "var(--text-secondary)",
              backgroundColor: "transparent",
              paddingLeft: "2rem",
              fontWeight: 500,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg-card)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Skills
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash ? "text-teal-400" : ""
            } border-l-2 py-3 text-sm cursor-pointer`}
            style={{
              borderLeftColor: workSplash ? "var(--accent)" : "var(--hover-bg)",
              color: workSplash ? "var(--accent)" : "var(--text-secondary)",
              backgroundColor: "transparent",
              paddingLeft: "2rem",
              fontWeight: 500,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg-card)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Systems
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon ? "text-teal-400" : ""
            } border-l-2 py-3 text-sm cursor-pointer`}
            style={{
              borderLeftColor: workAmazon ? "var(--accent)" : "var(--hover-bg)",
              color: workAmazon ? "var(--accent)" : "var(--text-secondary)",
              backgroundColor: "transparent",
              paddingLeft: "2rem",
              fontWeight: 500,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg-card)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Education
          </li>
        </ul>
        {workReactbd && <ReactBD />}
        {workGoogle && <Google />}
        {workApple && <Apple />}
        {workSplash && <Splash />}
        {workAmazon && <Amazon />}
      </div>
    </section>
  );
};


//Sectio title of each section 

const SectionTitle = ({ title, titleNo }) => {
  return (
    <h2
      className="text-2xl font-semibold flex items-center"
      style={{ fontFamily: "Inter, sans-serif", color: "var(--text-primary)" }}
    >
      <span
        className="text-base md:text-lg mr-2"
        style={{ color: "var(--accent)" }}
      >
        {titleNo}.
      </span>
      {title}
      <span
        className="hidden md:inline-flex md:w-60 lg:w-72 h-[0.5px] ml-6"
        style={{ backgroundColor: "var(--line)" }}
      ></span>
    </h2>
  );
};

//About section 

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto py-10 flex flex-col gap-8"
      style={{ maxWidth: "1024px" }}
    >
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
        }
      `}</style>
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div
          className="w-full lg:w-2/3 text-base flex flex-col gap-4"
          style={{ color: "var(--text-secondary)", fontWeight: 500 }}
        >
          <p>
            Hello! I'm MD AL MOTTAKI, an Artificial Intelligence Engineer passionate about building intelligent systems and pushing the boundaries of AI research. My journey started with a strong foundation in computer science and has evolved into hands-on expertise in AI systems, machine learning, and large language model applications.
          </p>
          <p>
            I have contributed to AI repositories, administered Python environments, and resolved runtime issues in complex software deployments. My background spans both <span style={{ color: "var(--accent)" }}>frontend and backend development</span>, with a particular focus on <span style={{ color: "var(--accent)" }}>AI infrastructure and LLM integration</span>. I'm deeply motivated by solving real-world AI challenges and advancing the state of AI research.
          </p>
          <p>
            Beyond development, I'm a continuous learner and enthusiast for modern AI frameworks. I regularly experiment with cutting-edge tools and APIs to understand their performance characteristics and integration strategies. I excel in both Windows and Linux environments.
          </p>
          <p>Here are some of the technologies I work with:</p>
          <ul
            className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              LangGraph & LangChain
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              Machine Learning
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              Neural Networks
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              FastAPI & Django
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              MongoDB & Vector DB
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              Groq & Gemini APIs
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              Streamlit & Open-source LLMs
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div
                className="hidden lg:inline-block absolute w-full h-80 rounded-md top-0 left-0"
                style={{
                  backgroundColor: "var(--bg-overlay)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--bg-overlay)")
                }
              />
            </div>
          </div>
          <div
            className="hidden lg:inline-flex w-full h-80 rounded-md"
            style={{
              border: "2px solid var(--accent)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-0.5rem, -0.5rem)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
            }}
          />
        </div>
      </div>
    </section>
  );
};

///Banner with animation

const Banner = () => {
  return (
    <section
      id="home"
      className="mx-auto py-10 flex flex-col gap-4 md:gap-8 md:px-10 xl:px-4"
      style={{ maxWidth: "1140px" }}
    >
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
        }
      `}</style>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg"
        style={{
          color: "var(--accent)",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-semibold flex flex-col"
        style={{
          fontFamily: "Inter, sans-serif",
          color: "var(--text-primary)",
        }}
      >
        MD AL MOTTAKI.
        <span
          className="mt-2 lg:mt-4"
          style={{ color: "var(--text-secondary)" }}
        >
          I design AI systems and LLM applications.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base max-w-[650px]"
        style={{ color: "var(--text-secondary)", fontWeight: 500 }}
      >
        I am an AI Engineer with a strong background in Python and hands-on experience designing, implementing, and evaluating AI systems and LLM applications. I excel in both Windows and Linux environments and am deeply motivated to advance my expertise in GPU-based AI deployment, AI infrastructure, and research-driven projects.{" "}
        <a href="www.example.com" target="_blank" rel="noopener noreferrer">
          <span
            className="inline-flex relative cursor-pointer h-7 overflow-x-hidden"
            style={{ color: "var(--accent)" }}
            onMouseEnter={(e) => {
              const underline = e.currentTarget.querySelector("span");
              if (underline) underline.style.transform = "translateX(0)";
            }}
            onMouseLeave={(e) => {
              const underline = e.currentTarget.querySelector("span");
              if (underline) underline.style.transform = "translateX(-110%)";
            }}
          >
            View my work
            <span
              className="absolute w-full h-[1px] left-0 bottom-1"
              style={{
                backgroundColor: "var(--accent)",
                transform: "translateX(-110%)",
                transition: "transform 0.5s",
              }}
            ></span>
          </span>
        </a>
      </motion.p>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm rounded-md"
          style={{
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.1em",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--hover-bg)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          Explore My Research
        </motion.button>
      </a>
    </section>
  );
};

//Left stript with social contact

const LeftSide = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-end gap-4"
      style={{ color: "var(--text-primary)" }}
    >
      <div className="flex flex-col gap-4">
        <a href="#" target="_blank">
          <span
            className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
            style={{
              backgroundColor: "var(--hover-bg)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
          >
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="#"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
            style={{
              backgroundColor: "var(--hover-bg)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
          >
            <SlSocialYoutube />
          </span>
        </a>
        <a
          href="#"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
            style={{
              backgroundColor: "var(--hover-bg)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
          >
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="#" target="_blank">
          <span
            className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
            style={{
              backgroundColor: "var(--hover-bg)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
          >
            <SlSocialFacebook />
          </span>
        </a>
        <a href="#" target="_blank">
          <span
            className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
            style={{
              backgroundColor: "var(--hover-bg)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
          >
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div
        className="w-[2px] h-32"
        style={{ backgroundColor: "var(--text-secondary)" }}
      ></div>
    </div>
  );
};

//Mega Navbar with theme option

const Navbar = () => {
  const ref = useRef("");
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const handleScroll = (e) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    setActiveLink(targetId);
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  function handleClick(e) {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  }

  return (
    <>
      <style jsx>{`
        .scrollbarHide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 px-4"
        style={{
          backgroundColor: "var(--background)",
          boxShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
        }}
      >
        <div
          className="h-full mx-auto py-1 flex items-center justify-between"
          style={{ maxWidth: "1440px", fontFamily: "Inter, sans-serif" }}
        >
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <img className="w-14" src={logo} alt="logo" />
            </motion.div>
          </Link>
          <div className="hidden md:inline-flex items-center gap-7">
            <ul className="flex text-[13px] gap-7">
              <Link
                className="flex items-center gap-1 cursor-pointer nav-link"
                href="#home"
                onClick={handleScroll}
                style={{
                  color:
                    activeLink === "home"
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  fontWeight: 500,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== "home")
                    e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== "home")
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  Home
                </motion.li>
              </Link>
              <Link
                className="flex items-center gap-1 cursor-pointer nav-link"
                href="#about"
                onClick={handleScroll}
                style={{
                  color:
                    activeLink === "about"
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  fontWeight: 500,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== "about")
                    e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== "about")
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.1 }}
                >
                  <span style={{ color: "var(--accent)" }}>01.</span>About
                </motion.li>
              </Link>
              <Link
                className="flex items-center gap-1 cursor-pointer nav-link"
                href="#experience"
                onClick={handleScroll}
                style={{
                  color:
                    activeLink === "experience"
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  fontWeight: 500,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== "experience")
                    e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== "experience")
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.2 }}
                >
                  <span style={{ color: "var(--accent)" }}>02.</span>Experience
                </motion.li>
              </Link>
              <Link
                className="flex items-center gap-1 cursor-pointer nav-link"
                href="#project"
                onClick={handleScroll}
                style={{
                  color:
                    activeLink === "project"
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  fontWeight: 500,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== "project")
                    e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== "project")
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                >
                  <span style={{ color: "var(--accent)" }}>03.</span>Project
                </motion.li>
              </Link>
              <Link
                className="flex items-center gap-1 cursor-pointer nav-link"
                href="#contact"
                onClick={handleScroll}
                style={{
                  color:
                    activeLink === "contact"
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  fontWeight: 500,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== "contact")
                    e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== "contact")
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.4 }}
                >
                  <span style={{ color: "var(--accent)" }}>04.</span>Contact
                </motion.li>
              </Link>
            </ul>
            <a href="#" target="_blank">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-4 py-2 rounded-md text-[13px]"
                style={{
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--hover-bg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                Resume
              </motion.button>
            </a>
            <button
              onClick={toggleTheme}
              className="ml-4 text-2xl"
              style={{ color: "var(--accent)" }}
            >
              {isDarkTheme ? <BsSun /> : <BsMoon />}
            </button>
          </div>
          <div
            onClick={() => setShow(true)}
            className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl cursor-pointer overflow-hidden group"
            style={{ color: "var(--accent)" }}
          >
            <span
              className="w-full h-[2px] inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"
              style={{ backgroundColor: "var(--accent)" }}
            ></span>
            <span
              className="w-full h-[2px] inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"
              style={{ backgroundColor: "var(--accent)" }}
            ></span>
            <span
              className="w-full h-[2px] inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"
              style={{ backgroundColor: "var(--accent)" }}
            ></span>
          </div>

          {/* if small device is true */}
          {show && (
            <div
              ref={ref}
              onClick={handleClick}
              className="absolute md:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            >
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="w-[80%] h-full overflow-y-scroll scrollbarHide flex flex-col items-center px-4 py-10 relative"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <MdOutlineClose
                  onClick={() => setShow(false)}
                  className="text-3xl cursor-pointer top-4 right-4"
                  style={{ color: "var(--accent)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--close-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                />
                <div className="flex flex-col items-center gap-7">
                  <ul className="flex flex-col text-base gap-7">
                    <Link
                      className="flex items-center gap-1 cursor-pointer nav-link"
                      href="#home"
                      onClick={handleScroll}
                      style={{
                        color:
                          activeLink === "home"
                            ? "var(--accent)"
                            : "var(--text-secondary)",
                        fontWeight: 500,
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeLink !== "home")
                          e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        if (activeLink !== "home")
                          e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1,
                          ease: "easeIn",
                        }}
                      >
                        Home
                      </motion.li>
                    </Link>
                    <Link
                      className="flex items-center gap-1 cursor-pointer nav-link"
                      href="#about"
                      onClick={handleScroll}
                      style={{
                        color:
                          activeLink === "about"
                            ? "var(--accent)"
                            : "var(--text-secondary)",
                        fontWeight: 500,
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeLink !== "about")
                          e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        if (activeLink !== "about")
                          e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.2,
                          ease: "easeIn",
                        }}
                      >
                        <span style={{ color: "var(--accent)" }}>01.</span>About
                      </motion.li>
                    </Link>
                    <Link
                      className="flex items-center gap-1 cursor-pointer nav-link"
                      href="#experience"
                      onClick={handleScroll}
                      style={{
                        color:
                          activeLink === "experience"
                            ? "var(--accent)"
                            : "var(--text-secondary)",
                        fontWeight: 500,
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeLink !== "experience")
                          e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        if (activeLink !== "experience")
                          e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.3,
                          ease: "easeIn",
                        }}
                      >
                        <span style={{ color: "var(--accent)" }}>02.</span>
                        Experience
                      </motion.li>
                    </Link>
                    <Link
                      className="flex items-center gap-1 cursor-pointer nav-link"
                      href="#project"
                      onClick={handleScroll}
                      style={{
                        color:
                          activeLink === "project"
                            ? "var(--accent)"
                            : "var(--text-secondary)",
                        fontWeight: 500,
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeLink !== "project")
                          e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        if (activeLink !== "project")
                          e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.4,
                          ease: "easeIn",
                        }}
                      >
                        <span style={{ color: "var(--accent)" }}>03.</span>
                        Project
                      </motion.li>
                    </Link>
                    <Link
                      className="flex items-center gap-1 cursor-pointer nav-link"
                      href="#contact"
                      onClick={handleScroll}
                      style={{
                        color:
                          activeLink === "contact"
                            ? "var(--accent)"
                            : "var(--text-secondary)",
                        fontWeight: 500,
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeLink !== "contact")
                          e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        if (activeLink !== "contact")
                          e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.5,
                          ease: "easeIn",
                        }}
                      >
                        <span style={{ color: "var(--accent)" }}>04.</span>
                        Contact
                      </motion.li>
                    </Link>
                  </ul>
                  <a href="https://drive.google.com/file/d/1-YdJGmnhjEQHb-onYB_6haHj02y93TZj/view?usp=sharing" target="_blank">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, ease: "easeIn" }}
                      className="w-32 h-10 rounded-md text-[13px]"
                      style={{
                        color: "var(--accent)",
                        border: "1px solid var(--accent)",
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "var(--hover-bg)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      Resume
                    </motion.button>
                  </a>
                  <button
                    onClick={toggleTheme}
                    className="mt-4 text-2xl"
                    style={{ color: "var(--accent)" }}
                  >
                    {isDarkTheme ? <BsSun /> : <BsMoon />}
                  </button>
                  <div className="flex gap-4">
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, ease: "easeIn" }}
                      href="#"
                      target="_blank"
                      className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
                      style={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--icon)",
                        transition:
                          "border-color 0.3s, color 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--icon)";
                      }}
                    >
                      <TbBrandGithub />
                    </motion.a>
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.85, ease: "easeIn" }}
                      href="#"
                      target="_blank"
                      className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
                      style={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--icon)",
                        transition:
                          "border-color 0.3s, color 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--icon)";
                      }}
                    >
                      <SlSocialYoutube />
                    </motion.a>
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9, ease: "easeIn" }}
                      href="#"
                      target="_blank"
                      className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
                      style={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--icon)",
                        transition:
                          "border-color 0.3s, color 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--icon)";
                      }}
                    >
                      <SlSocialLinkedin />
                    </motion.a>
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.95, ease: "easeIn" }}
                      href="#"
                      target="_blank"
                      className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
                      style={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--icon)",
                        transition:
                          "border-color 0.3s, color 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--icon)";
                      }}
                    >
                      <SlSocialFacebook />
                    </motion.a>
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1, ease: "easeIn" }}
                      href="#"
                      target="_blank"
                      className="w-10 h-10 text-xl rounded-full inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300"
                      style={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border)",
                        color: "var(--icon)",
                        transition:
                          "border-color 0.3s, color 0.3s, transform 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--icon)";
                      }}
                    >
                      <SlSocialInstagram />
                    </motion.a>
                  </div>
                </div>
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, ease: "easeIn" }}
                    className="text-sm w-72 tracking-widest text-center mt-4"
                    href="mailto:mottaki567@gmail.com"
                    style={{ color: "var(--accent)" }}
                  >
                    <p>mottaki567@gmail.com</p>
                  </motion.a>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
//main app starts here with no navigation sign , lazy loading, left and right strip with beautiful color
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme }}>
      <style>
        {`
          :root {
            ${Object.entries(theme)
              .map(([key, value]) => `${key}: ${value};`)
              .join("\n")}
          }
        `}
      </style>
      <Head>
        <title>MD AL MOTTAKI - AI Research Engineer</title>
        <meta name="description" content="AI Research Engineer Portfolio - LLM Systems, AI Infrastructure, and Model Evaluation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main
        className="w-full h-screen overflow-x-hidden overflow-y-scroll scrollbarHide scrollbar-hide"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--text-primary)",
          fontFamily: "Montserrat, sans-serif",
          scrollbarTrackColor: "var(--scrollbar-indentify)",
          scrollbarThumbColor: "var(--scrollbar-thumbnail)",
          scrollbarWidth: "none",
        }}
      >
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4">
            <Banner />
            <About />
            {/* <Experience /> */}
            <Projects />
            <Archive />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

