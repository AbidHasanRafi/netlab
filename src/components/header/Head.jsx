import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Head = () => {
  return (
    <div className="bg-background-dark text-text-dark dark:bg-background-light dark:text-text-light transition-colors duration-200 z-50">
      <header className="text-3xl lg:text-4xl text-center font-bold mx-2 pb-5 mb-5 transition-colors duration-100">
        <h1>
          Development.js
          <br />{" "}
          <span className="text-xl lg:text-2xl font-normal">
            [ একটি কমপ্যাক্ট ফুল-স্ট্যাক জার্নিতে স্বাগতম ]
          </span>{" "}
        </h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-200 text-sm lg:text-lg font-semibold text-center">
          <span className="text-neutral-900 dark:text-neutral-400 font-normal">
            Content Guide:
          </span>{" "}
          <a
            title="Md. Abid Hasan Rafi"
            className="text-neutral-900 dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300 hover:underline transition-colors duration-200"
            href="https://abid-hasan-rafi.web.app/"
          >
            Md. Abid Hasan Rafi
          </a>
        </p>
        <div className="flex justify-center gap-2 lg:gap-4 mt-3">
          <a
            title="Linkedin"
            className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-200 text-lg lg:text-xl"
            href="https://www.linkedin.com/in/abid-hasan-rafi/"
          >
            <FaLinkedin />
          </a>
          <a
            title="GitHub"
            className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-200 text-lg lg:text-xl"
            href="https://github.com/AbidHasanRafi"
          >
            <FaGithub />
          </a>
          <a
            title="Instagram"
            className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-200 text-lg lg:text-xl"
            href="https://www.instagram.com/abidhasanrafi.ig/"
          >
            <FaInstagram />
          </a>
          <a
            title="Twitter"
            className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-200 text-lg lg:text-xl"
            href="https://x.com/abid_h_rafi"
          >
            <FaSquareXTwitter />
          </a>
          <a
            title="Facebook"
            className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-200 text-lg lg:text-xl"
            href="https://www.facebook.com/abidhasan.rafi.10"
          >
            <FaFacebook />
          </a>
        </div>
      </header>
      <p className="my-5 lg:my-10 mx-3 lg:mx-10 text-base leading-7 font-normal text-justify px-4 text-neutral-900 dark:text-neutral-200">
        Embark on a comprehensive journey through the essential technologies and
        frameworks of modern web development, all presented in Bangla. Our site
        provides detailed insights and practical knowledge to help you master
        the tools that shape today's digital landscape. Whether you are just
        starting or looking to deepen your expertise, our resources will guide
        you through each technology step-by-step. Dive in and advance your
        development journey with expert content designed to empower you.{" "}
      </p>
    </div>
  );
};

export default Head;
