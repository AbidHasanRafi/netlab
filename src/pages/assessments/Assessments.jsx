import React from "react";
import { Helmet } from "react-helmet";
import AssessmentTable from "../../components/assessment-table/AssessmentTable";

const AssessmentInstructions = () => (
  <div className="text-justify mb-8">
    <h1 className="text-3xl font-semibold text-center mb-6">
      Assessment Instructions
    </h1>
    <p className="text-gray-600 dark:text-gray-200 mb-6 text-base leading-relaxed">
      Welcome to the assessment section! The given table displays the quizzes
      available for each chapter, including the number of questions and the
      current status of each quiz. Here’s what you need to know to get started:
    </p>
    <h2 className="text-2xl font-medium mb-4 text-center">
      How to Use This Table:
    </h2>
    <ol className="text-base list-item list-inside mb-6 text-gray-600 dark:text-gray-200 leading-relaxed">
      <li>
        <span className="mr-1 font-medium text-zinc-400">Chapter Name:</span>{" "}
        Shows the name of the chapter for which the quiz is available.
      </li>
      <li>
        <span className="mr-1 font-medium text-zinc-400">No of Questions:</span>{" "}
        Indicates the total number of questions in the quiz for each chapter.
      </li>
      <li>
        <span className="mr-1 font-medium text-zinc-400">Assessment Link:</span>{" "}
        Click on the link to start the quiz. The link will be disabled or
        crossed out if the quiz is not published yet.
      </li>
      <li>
        <span className="mr-1 font-medium text-zinc-400">Publish Status:</span>{" "}
        Displays whether the quiz is 'Completed', 'In Progress', or 'Not
        Published'.
      </li>
    </ol>
    <h2 className="text-2xl font-medium mb-4 text-center">Quiz Details:</h2>
    <ol className="text-base list-item list-inside mb-6 text-gray-600 dark:text-gray-200 leading-relaxed">
      <li>
        <span className="mr-1 font-medium text-zinc-400">
          Number of Questions:
        </span>{" "}
        The quiz varies in length by chapter. Make sure to check the number of
        questions before you begin.
      </li>
      <li>
        <span className="mr-1 font-medium text-zinc-400">Scoring:</span> Each
        correct answer awards 1 point. There’s no penalty for incorrect answers,
        so guess if you’re unsure!
      </li>
      <li>
        <span className="mr-1 font-medium text-zinc-400">Time Limit:</span>{" "}
        There is no time limit for completing the quiz. Take your time to answer
        each question thoughtfully.
      </li>
    </ol>
    <h2 className="text-2xl font-medium mb-4 text-center">Instructions:</h2>
    <p className="text-gray-600 dark:text-gray-200 mb-6 text-base leading-relaxed">
      Read each question carefully and select the best answer from the options
      provided. Review your answers before submitting the quiz to ensure
      accuracy.
    </p>
    <p className="text-base text-gray-500 dark:text-gray-300 leading-relaxed">
      We wish you the best of luck with your assessments. Have fun and use this
      opportunity to test and enhance your skills!
    </p>
  </div>
);

const Assessments = () => (
  <div className="min-h-screen text-gray-700 dark:text-gray-300 max-w-4xl mx-auto p-6">
    <Helmet>
      <title>NetLab | Assessments</title>
    </Helmet>
    <AssessmentInstructions />
    <AssessmentTable />
  </div>
);

export default Assessments;
