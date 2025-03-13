import React from "react";

const ContactDetails = () => {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
        Get in Touch
      </h2>
      <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
        We’d love to hear from you! Here’s how you can reach us:
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
            Address
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            HSTU-5200,
            <br />
            Dinajpur Sadar, Dinajpur
            <br />
            Rangpur, Bangladesh
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
            Email
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            <a
              href="mailto:ahr16.abidhasanrafi@gmail.com"
              className="hover:text-gray-800 dark:hover:text-gray-100"
            >
              ahr16.abidhasanrafi@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
            Phone
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400">
            <a
              href="tel:+8801737-826404"
              className="hover:text-gray-800 dark:hover:text-gray-100"
            >
              +8801737-826404
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;