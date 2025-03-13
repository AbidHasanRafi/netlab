import React from "react";
import Card from "../card/Card";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiGraphql,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
} from "react-icons/si";

const cardData = [
  {
    id: 1,
    Icon: SiHtml5,
    chapter: "01",
    title: "HTML",
    description:
      "Learn about HTML, the foundational language for creating web pages.",
    link: "/html",
    status: "Completed",
  },
  {
    id: 2,
    Icon: SiCss3,
    chapter: "02",
    title: "CSS",
    description: "Dive into CSS to style and enhance your web pages.",
    link: "/css",
    status: "In Progress",
  },
  {
    id: 3,
    Icon: SiTailwindcss,
    chapter: "03",
    title: "Tailwind",
    description: "Explore Tailwind CSS, a utility-first CSS framework.",
    link: "#",
    status: "Not Started",
  },
  {
    id: 4,
    Icon: SiJavascript,
    chapter: "04",
    title: "JavaScript",
    description:
      "Discover JavaScript and bring your web pages to life with interactivity.",
    link: "#",
    status: "Not Started",
  },
  {
    id: 5,
    Icon: SiReact,
    chapter: "05",
    title: "React",
    description:
      "Dive into React, a popular JavaScript library for building user interfaces.",
    link: "#",
    status: "Not Started",
  },
  {
    id: 6,
    Icon: SiNodedotjs,
    chapter: "06",
    title: "Node.js",
    description:
      "Learn Node.js, a runtime environment for running JavaScript on the server side.",
    link: "#",
    status: "Not Started",
  },
  {
    id: 7,
    Icon: SiFirebase,
    chapter: "07",
    title: "Firebase",
    description:
      "Discover Firebase, a platform for building web and mobile applications.",
    link: "#",
    status: "Not Started",
  },
  {
    id: 8,
    Icon: SiMongodb,
    chapter: "08",
    title: "MongoDB",
    description: "Explore MongoDB, a NoSQL database for flexible data storage.",
    link: "#",
    status: "Not Started",
  },
  {
    id: 9,
    Icon: SiGraphql,
    chapter: "09",
    title: "GraphQL",
    description: "Learn about GraphQL, a query language for APIs.",
    link: "#",
    status: "Not Started",
  },
  {
    id: 10,
    Icon: SiTypescript,
    chapter: "10",
    title: "TypeScript",
    description: "Dive into TypeScript, a typed superset of JavaScript.",
    link: "#",
    status: "Not Started",
  },
  {
    id: 11,
    Icon: SiNextdotjs,
    chapter: "11",
    title: "Next.js",
    description:
      "Explore Next.js, a React framework for server-side rendering and static site generation.",
    link: "#",
    status: "Not Started",
  },
  {
    id: 12,
    Icon: SiNestjs,
    chapter: "12",
    title: "Nest.js",
    description:
      "Discover Nest.js, a progressive Node.js framework for building server-side applications.",
    link: "#",
    status: "Not Started",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {cardData.map(
        ({ id, Icon, chapter, title, description, link, status }) => (
          <Card
            key={id}
            Icon={Icon}
            chapter={chapter}
            title={title}
            description={description}
            link={link}
            status={status}
          />
        )
      )}
    </div>
  );
};

export default Cards;
