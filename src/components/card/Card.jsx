import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ Icon, chapter, title, description, link, status }) => {
  return (
    <Link to={link} title={title}>
      <motion.div
        className="relative w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[22vw] min-h-[180px] p-4 bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-neutral-700 dark:to-neutral-900 border border-gray-400 dark:border-neutral-400 rounded-lg shadow-md dark:shadow-gray-800 overflow-hidden flex flex-col"
        initial={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          borderColor: "#ddd",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 rounded-lg border-4 border-transparent"></div>
        <div className="flex items-center mb-4 relative z-10 space-x-3">
          <motion.div
            className="text-4xl text-black dark:text-white flex-shrink-0"
            whileHover={{ rotate: 12 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon />
          </motion.div>
          <div className="flex flex-col justify-center flex-grow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">
                Chapter: {chapter}
              </h3>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  status === "Completed"
                    ? "bg-green-300 text-black dark:bg-green-800 dark:text-green-100"
                    : status === "In Progress"
                    ? "bg-blue-300 text-black dark:bg-blue-800 dark:text-blue-100"
                    : "bg-gray-300 text-black dark:bg-neutral-600 dark:text-neutral-100"
                }`}
              >
                {status}
              </span>
            </div>
            <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {title}
            </h4>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

Card.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  chapter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  status: PropTypes.oneOf(["Completed", "In Progress", "Not Started"])
    .isRequired,
};

export default Card;
