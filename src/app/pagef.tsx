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

const logo = "https://i.ibb.co.com/h1L1kdBX/logo.png";
const profileImg = "https://i.ibb.co.com/h1swttDj/profile.png";
const amazonImg = "https://i.ibb.co.com/Kx6msKVQ/amazon-Img.png";
const cyberImg = "https://i.ibb.co.com/nNSsK0Wj/cyber-Blog.png";
const noorShop = "https://i.ibb.co.com/QjfYH9M9/noorShop.png";

// Define themes with CSS variables
// Define themes with CSS variables
const darkTheme = {
  "--background": "#0a192f",
  "--text-primary": "#ccd6f6",
  "--text-secondary": "#8892b0",
  "--accent": "#64ffda",
  "--card-background": "#112240",
  "--line": "#374151",
  "--hover-bg": "rgba(100,255,218,0.1)",
  "--close-hover": "#ef4444",
  "--border": "#3f3f46",
  "--icon": "#e4e4e7",
  "--scrollbar-track": "rgba(136,146,176,0.2)",
  "--scrollbar-thumb": "rgba(136,146,176,0.6)",
  "--overlay-bg": "rgba(100,255,218,0.2)",
};

const lightTheme = {
  "--background":      "gray-800",            // white background
  "--text-primary":    "nvay",            // Tailwind slate-800
  "--text-secondary":  "black",            // Tailwind gray-500
  "--accent":          "#64ffda",            // same green accent as dark theme
  "--card-background": "#f8fafc",            // Tailwind gray-50
  "--line":            "#e5e7eb",            // Tailwind gray-200
  "--hover-bg":        "rgba(100,255,218,0.1)", // subtle green hover
  "--close-hover":     "#dc2626",            // red-600
  "--border":          "#e5e7eb",            // gray-200
  "--icon":            "#6b7280",            // gray-500
  "--scrollbar-track": "rgba(107,114,128,0.2)", // gray-500 @ 20%
  "--scrollbar-thumb": "rgba(107,114,128,0.6)", // gray-500 @ 60%
  "--overlay-bg":      "rgba(100,255,218,0.2)"  // green overlay @ 20%
};


// Create Theme Context
const ThemeContext = createContext({
  theme: darkTheme,
  isDarkTheme: true,
  toggleTheme: () => {},
});

// Component Definitions
const Splash = () => {
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
        MERN Stack Developer
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          @Splash
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
        Jan 2021 - Dec 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          distinctio doloribus quas ex ea sed.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
          accusantium animi tenetur rerum, culpa quibusdam! Consectetur
          laboriosam hic harum modi.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et
          corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt
          sequi?
        </li>
      </ul>
    </motion.div>
  );
};

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
        Engineer
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          @ReactBD
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
        Jan 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript, Gatsby,
          React, Craft, WordPress, Prismic, and Netlify
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engineers, designers,
          producers, and clients on a daily basis
        </li>
      </ul>
    </motion.div>
  );
};

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
        Web Developer
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          @Google
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
        Jan 2022 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          distinctio doloribus quas ex ea sed.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
          accusantium animi tenetur rerum, culpa quibusdam! Consectetur
          laboriosam hic harum modi.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et
          corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt
          sequi?
        </li>
      </ul>
    </motion.div>
  );
};

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
        MERN Stack Developer
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          @Apple
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
        Jan 2021 - Dec 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          distinctio doloribus quas ex ea sed.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
          accusantium animi tenetur rerum, culpa quibusdam! Consectetur
          laboriosam hic harum modi.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et
          corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt
          sequi?
        </li>
      </ul>
    </motion.div>
  );
};

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
        Web Design
        <span style={{ color: "var(--accent)", letterSpacing: "0.1em" }}>
          @Amazon
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
        Jan 2020 - Dec 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          distinctio doloribus quas ex ea sed.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
          accusantium animi tenetur rerum, culpa quibusdam! Consectetur
          laboriosam hic harum modi.
        </li>
        <li
          className="text-base flex gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span style={{ color: "var(--accent)", marginTop: "0.25rem" }}>
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et
          corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt
          sequi?
        </li>
      </ul>
    </motion.div>
  );
};

const RightSide = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-end gap-6"
      style={{ color: "var(--text-primary)" }}
    >
      <a href="mailto:noor.jsdivs@gmail.com">
        <p
          className="text-sm rotate-90 w-72 tracking-widest"
          style={{ color: "var(--accent)" }}
        >
          reactbd@proton.me
        </p>
      </a>
      <span
        className="w-[2px] h-32 inline-flex"
        style={{ backgroundColor: "var(--text-secondary)" }}
      ></span>
    </div>
  );
};

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
      <a href="mailto:example@gmail.com">
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

const ArchiveCard = ({ title, des, listItem, link }) => {
  return (
    <a href={link} target="_blank">
      <div
        className="w-full h-80 rounded-lg p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group"
        style={{ backgroundColor: "var(--card-background)" }}
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
          Other Noteworthy Projects
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
          title="Educare Engligh Learning Academy"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://www.educareenglishlearningacademy.com/"
        />
        <ArchiveCard
          title="Cyber Security Blog with live comments section"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://www.noormohmmad.com/"
        />
        <ArchiveCard
          title="ReactBD web development company"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://reactbd.com/"
        />
        <ArchiveCard
          title="Amazon Clone with login, cart-option and payment intrigation."
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://amazonclone.reactbd.com/"
        />
        <ArchiveCard
          title="JSON data (example data api for test projects)"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Nextjs", "Tailwind CSS", "next-router"]}
          link="https://jsondata.reactbd.com/"
        />
        <ArchiveCard
          title="Dynamic Responsive Portfolio"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://portfolioone.reactbd.com/"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="OREBI e-commerce Shopping store"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                link="https://orebishopping.reactbd.com/"
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
                link="https://noorshop.netlify.app/"
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
                link="https://my-blog-delta-eight.vercel.app/"
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
                link="https://shoppersyt.vercel.app/"
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
                link="https://portfoliotwo.reactbd.com/"
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
                link="https://portfoliothree.reactbd.com/"
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
                link="https://bazar.reactbd.com/"
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
                link="https://blog101.reactbd.com/"
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
                link="https://youtubetodo.vercel.app/"
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
            href="www.example.com"
            target="_blank"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
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
                Amazon Clone 2.0
              </h3>
            </div>
            <p
              className="text-sm md:text-base p-2 md:p-6 rounded-md"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-secondary)",
              }}
            >
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span style={{ color: "var(--accent)" }}>O-auth</span> and then
              make the purchase using{" "}
              <span style={{ color: "var(--accent)" }}>stripe</span>.
            </p>
            <ul
              className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
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
                <TbBrandGithub />
              </a>
              <a
                href="www.example.com"
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
                href="www.example.com"
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
            href="www.example.com"
            target="_blank"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
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
                Featured Project
              </p>
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Cyber Security Blog
              </h3>
            </div>
            <p
              className="text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-secondary)",
              }}
            >
              A full functional Cyber Security Blog where you can view the
              latest post and{" "}
              <span style={{ color: "var(--accent)" }}>comments on</span> it by
              passing your ideas besides you can try to add your own{" "}
              <span style={{ color: "var(--accent)" }}>post</span> on it by
              logging on the portal.
            </p>
            <ul
              className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Sanity</li>
              <li>React Hook Form</li>
            </ul>
            <div className="text-2xl flex gap-4">
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
                <TbBrandGithub />
              </a>
              <a
                href="www.example.com"
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
                href="www.example.com"
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
            href="www.example.com"
            target="_blank"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={noorShop}
                alt="noorShop"
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
                Featured Project
              </p>
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Amazon Clone 2.0
              </h3>
            </div>
            <p
              className="text-sm md:text-base p-2 md:p-6 rounded-md"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-secondary)",
              }}
            >
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span style={{ color: "var(--accent)" }}>O-auth</span> and then
              make the purchase using{" "}
              <span style={{ color: "var(--accent)" }}>stripe</span>.
            </p>
            <ul
              className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
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
                <TbBrandGithub />
              </a>
              <a
                href="www.example.com"
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
                href="www.example.com"
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
              (e.currentTarget.style.backgroundColor = "var(--card-background)")
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
              (e.currentTarget.style.backgroundColor = "var(--card-background)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Google
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
              (e.currentTarget.style.backgroundColor = "var(--card-background)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Apple
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
              (e.currentTarget.style.backgroundColor = "var(--card-background)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Splash
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
              (e.currentTarget.style.backgroundColor = "var(--card-background)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Amazon
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
            Hello! My name is John Doe and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up,{" "}
            <span style={{ color: "var(--accent)" }}>
              a huge corporation, and a student-led design studio.
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
            accusantium fugiat veritatis, quidem repellat{" "}
            <span style={{ color: "var(--accent)" }}>
              ab natus possimus? Sint, accusamus!
            </span>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse
            recusandae.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul
            className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span style={{ color: "var(--accent)" }}>
                <AiFillThunderbolt />
              </span>
              Tailwindcss
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
                  backgroundColor: "var(--overlay-bg)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--overlay-bg)")
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
        John Doe.
        <span
          className="mt-2 lg:mt-4"
          style={{ color: "var(--text-secondary)" }}
        >
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base max-w-[650px]"
        style={{ color: "var(--text-secondary)", fontWeight: 500 }}
      >
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem.{" "}
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
            Learn more
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
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

const LeftSide = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-end gap-4"
      style={{ color: "var(--text-primary)" }}
    >
      <div className="flex flex-col gap-4">
        <a href="https://github.com/noorjsdivs" target="_blank">
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
          href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
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
          href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
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
        <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
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
        <a href="https://www.instagram.com/simplenoor143/" target="_blank">
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
                style={{ backgroundColor: "var(--card-background)" }}
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
                  <a href="/assets/noor_resume.pdf" target="_blank">
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
                  href="mailto:example@gmail.com"
                  style={{ color: "var(--accent)" }}
                >
                  <p>example@gmail.com</p>
                </motion.a>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default function Home() {
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
        <title>John Doe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main
        className="w-full h-screen overflow-x-hidden overflow-y-scroll scrollbarHide scrollbar-hide"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--text-primary)",
          fontFamily: "Montserrat, sans-serif",
          scrollbarTrackColor: "var(--scrollbar-track)",
          scrollbarThumbColor: "var(--scrollbar-thumb)",
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
            <Experience />
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
