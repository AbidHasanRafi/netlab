import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Head = () => {
  return (
    <div className="bg-background-dark text-text-dark dark:bg-background-light dark:text-text-light transition-colors duration-200 z-50">
      <header className="text-3xl lg:text-4xl text-center font-bold mx-2 pb-5 mb-5 transition-colors duration-100">
        <h1>
        NetLab
          <br />{" "}
          <span className="text-xl lg:text-2xl font-normal">
          ইন্টারনেট প্রোগ্রামিংয়ের জার্নিতে স্বাগতম
          </span>{" "}
        </h1>
      </header>
      <p className="my-5 mx-3 lg:mx-10 text-base leading-7 font-normal text-justify px-4 text-neutral-900 dark:text-neutral-200">
      NetLab-এ স্বাগতম! এখানে আপনি বাংলায় আধুনিক ওয়েব প্রোগ্রামিংয়ের প্রযুক্তি ও ফ্রেমওয়ার্ক সহজভাবে শিখতে পারবেন। আমাদের পাঠ্যবলী আপনাকে ধাপে ধাপে গাইড করবে, শুরু থেকে advanced লেভেল পর্যন্ত। আপনি নতুন হোন বা অভিজ্ঞ, এখানে প্রতিটি বিষয় সহজ ভাষায় ব্যাখ্যা করা হয়েছে। শিখতে শুরু করুন এবং আপনার প্রোগ্রামিং স্কিল আরও উন্নত করুন!{" "}
      </p>
    </div>
  );
};

export default Head;
