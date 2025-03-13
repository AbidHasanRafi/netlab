import React from "react";
import { Helmet } from "react-helmet";
import image1 from "../../assets/abid.jpg";
import image2 from "../../assets/rifa.png";
import image3 from "../../assets/mohima.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
      <Helmet>
        <title>NetLab | About</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center mb-6">About NetLab</h1>
      <p className="mb-6 text-base leading-relaxed">
        NetLab is an open learning platform dedicated to teaching web
        development concepts within the JavaScript ecosystem, all explained in
        Bangla. Whether you're a beginner or looking to deepen your knowledge,
        our content is designed to be both accessible and comprehensive.
      </p>
      <h2 className="text-2xl font-medium mb-4 text-center">Our Mission</h2>
      <p className="mb-6 text-base leading-relaxed">
        Our mission is to provide high-quality educational resources in Bangla
        for those interested in web development using JavaScript technologies.
        We aim to make learning straightforward and effective, helping you build
        a solid foundation and advanced skills in web development.
      </p>
      <h2 className="text-2xl font-medium mb-4 text-center">What We Offer</h2>
      <ul className="list-disc list-inside mb-6 text-base leading-relaxed">
        <li>
          12 comprehensive chapters covering various aspects of JavaScript web
          development.
        </li>
        <li>
          Clear explanations and practical examples in Bangla to enhance your
          learning experience.
        </li>
        <li>
          Interactive quizzes and assignments to reinforce your understanding of
          the material.
        </li>
        <li>
          Personal insights and tips from the creator to guide you through your
          learning journey.
        </li>
      </ul>
      <h2 className="text-2xl font-medium mb-6 text-center">Our Vision</h2>
      <p className="mb-6 text-base leading-relaxed">
        We envision a future where web development education is accessible to
        everyone in their native language. By focusing on delivering
        high-quality content in Bangla, we aim to empower learners and
        contribute to a thriving community of web developers.
      </p>
      <h2 className="text-2xl font-medium mb-6 text-center">
        Meet the Maintainer
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 dark:bg-neutral-900 p-6 border border-blue-500 dark:border-blue-400 rounded-lg shadow-lg">
        <img
          src={image1}
          alt="Abid Hasan Rafi"
          title="Abid Hasan Rafi"
          className="w-32 lg:w-40 h-32 lg:h-40 rounded-full border-4 border-blue-500 dark:border-blue-400 transition-all duration-300 ease-in-out transform hover:border-blue-400 dark:hover:border-white object-cover mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <a
            href="https://abid-hasan-rafi.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3
              title="Abid Hasan Rafi"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 transition-colors duration-300 ease-in-out hover:text-blue-400 dark:hover:text-white"
            >
              Abid Hasan Rafi
            </h3>
          </a>
          <div className="flex justify-center md:justify-start gap-2 lg:gap-3 mb-4">
            <a
              title="LinkedIn"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-sm md:text-lg"
              href="https://www.linkedin.com/in/abid-hasan-rafi/"
            >
              <FaLinkedin />
            </a>
            <a
              title="GitHub"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-sm md:text-lg"
              href="https://github.com/AbidHasanRafi"
            >
              <FaGithub />
            </a>
            <a
              title="Instagram"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-sm md:text-lg"
              href="https://www.instagram.com/abidhasanrafi.ig/"
            >
              <FaInstagram />
            </a>
            <a
              title="Twitter"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-sm md:text-lg"
              href="https://x.com/abid_h_rafi"
            >
              <FaSquareXTwitter />
            </a>
            <a
              title="Facebook"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-sm md:text-lg"
              href="https://www.facebook.com/abidhasan.rafi.10"
            >
              <FaFacebook />
            </a>
          </div>
          <p className="text-base text-justify leading-relaxed text-gray-800 dark:text-gray-200">
            Hello, I’m Abid Hasan Rafi, the owner and maintainer of NetLab. My
            goal is to provide a rich learning experience for web development
            enthusiasts through content explained in Bangla. I’m passionate
            about technology and education, and I hope to make your learning
            journey engaging and rewarding. Thank you for being part of this
            platform!
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-medium mt-8 mb-6 text-center">
        Contributors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 p-4 border border-blue-500 dark:border-blue-400 rounded-lg shadow-lg">
          <img
            src={image2}
            alt="Fatema Rifa"
            className="w-24 h-24 rounded-full mb-3"
          />
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Fatema Rifa
          </h3>
          <div className="flex gap-3 mb-2">
            <a
              title="Facebook"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-lg"
              href="#"
            >
              <FaFacebook />
            </a>
            <a
              title="GitHub"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-lg"
              href="#"
            >
              <FaGithub />
            </a>
            <a
              title="LinkedIn"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-lg"
              href="#"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-sm text-gray-800 dark:text-gray-200 text-center mb-3">
            Fatema Rifa contributed significantly to the project by curating
            detailed and engaging content, ensuring that the educational
            materials are accessible and beneficial for learners.
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-neutral-900 p-4 border border-blue-500 dark:border-blue-400 rounded-lg shadow-lg">
          <img
            src={image3}
            alt="Mohima Binte Rasel"
            className="w-24 h-24 rounded-full mb-3"
          />
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Mohima Binte Rasel
          </h3>
          <div className="flex gap-3 mb-2">
            <a
              title="Facebook"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-lg"
              href="#"
            >
              <FaFacebook />
            </a>
            <a
              title="GitHub"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-lg"
              href="#"
            >
              <FaGithub />
            </a>
            <a
              title="LinkedIn"
              className="text-neutral-900 dark:text-gray-200 hover:text-neutral-700 dark:hover:text-gray-400 transition-colors duration-300 ease-in-out text-lg"
              href="#"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-sm text-gray-800 dark:text-gray-200 text-center mb-3">
            Mohima Binte Rasel played a vital role in the project by creating
            structured and comprehensive content, enhancing the quality and
            clarity of the learning materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
