import React, { useState, useEffect } from "react";
import MarkdownViewer from "../renderer/MarkdownRenderer";
import { Helmet } from "react-helmet";

const Chapter01 = () => {
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState([]);

  const sectionUrls = [
    {
      id: "getting-started",
      url: "https://raw.githubusercontent.com/AbidHasanRafi/development-js/main/01.%20HTML/assets/GETTING%20STARTED.md",
    },
    {
      id: "head-elements",
      url: "https://raw.githubusercontent.com/AbidHasanRafi/development-js/main/01.%20HTML/assets/HEAD%20ELEMENTS.md",
    },
    {
      id: "text-basics",
      url: "https://raw.githubusercontent.com/AbidHasanRafi/development-js/main/01.%20HTML/assets/TEXT%20BASICS.md",
    },
    {
      id: "list-types",
      url: "https://raw.githubusercontent.com/AbidHasanRafi/development-js/main/01.%20HTML/assets/LIST%20TYPES.md",
    },
    {
      id: "add-links",
      url: "https://raw.githubusercontent.com/AbidHasanRafi/development-js/main/01.%20HTML/assets/ADD%20LINKS.md",
    },
    {
      id: "add-images",
      url: "https://raw.githubusercontent.com/AbidHasanRafi/development-js/main/01.%20HTML/assets/ADD%20IMAGES.md",
    },
    {
      id: "semantic-tags",
      url: "https://raw.githubusercontent.com/AbidHasanRafi/development-js/main/01.%20HTML/assets/SEMANTIC%20TAGS.md",
    },
    {
      id: "create-tables",
      url: "https://raw.githubusercontent.com/AbidHasanRafi/development-js/main/01.%20HTML/assets/CREATE%20TABLES.md",
    },
    {
      id: "forms-and-input",
      url: "https://raw.githubusercontent.com/AbidHasanRafi/development-js/main/01.%20HTML/assets/FORMS%20AND%20INPUTS.md",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const tocItems = sectionUrls.map((section) => ({
      id: section.id,
      title: section.id.replace(/-/g, " ").toUpperCase(),
    }));
    setToc(tocItems);
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6 gap-4">
      <Helmet>
        <title>DJs | HTML</title>
      </Helmet>
      <div className="col-span-1 bg-white dark:bg-[#1A1A1A] p-4 pl-10 h-auto lg:sticky lg:top-16 lg:h-screen">
        <div className="lg:fixed">
          <h3 className="text-xl font-normal mt-5 mb-4">
            <p className="text-4xl text-center lg:text-start font-semibold pb-3 mb-8 border-b border-b-neutral-700">
              HTML
            </p>
            Table of Contents
          </h3>
          <ul className="text-sm list-disc pl-7 space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  title={item.title}
                  className="text-blue-600 dark:text-blue-400 font-light hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-5 p-4">
        {loading ? (
          <div className="mt-10 flex lg:mt-80 justify-center">
            <div className="flex flex-col items-center">
              <div className="loader"></div>
              <p className="mt-2 text-gray-300">
                Content is loading, please wait...
              </p>
            </div>
          </div>
        ) : (
          <div>
            {sectionUrls.map((section) => (
              <div id={section.id} key={section.id} className="mb-12">
                <MarkdownViewer url={section.url} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter01;
