import React, { useState } from "react";

const CodeIDE = () => {
  const [code, setCode] = useState("console.log('Hello, World!');");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  // Function to run the code using the browser's JS engine
  const runCode = () => {
    setIsRunning(true);
    setOutput(""); // Clear the output before running the code

    try {
      // Create a custom function to capture console.log outputs
      const originalConsoleLog = console.log;
      let consoleOutput = "";
      console.log = (message) => {
        consoleOutput += message + "\n"; // Capture the console output
      };

      // Use Function constructor to evaluate JavaScript code safely in a separate context
      const func = new Function(code);
      func(); // Execute the code

      // Reset console.log to its original function after execution
      console.log = originalConsoleLog;

      // Set the captured output to state
      setOutput(consoleOutput || "No output");

    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="container mx-auto p-6 lg:p-8 text-black dark:text-gray-300 min-h-screen">
      <h1 className="lg:text-3xl text-2xl font-semibold text-center mb-6">JS Code Editor</h1>
      
      {/* Code Editor Section */}
      <div className="font-mono grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor Textarea */}
        <div className="bg-slate-300 dark:bg-neutral-800/70 p-4 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-lg text-gray-900 dark:text-gray-300 mb-4">Code Editor</h2>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows="10"
            placeholder="Write your JavaScript code here..."
            className="w-full p-4 bg-slate-500 dark:bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={runCode}
            disabled={isRunning}
            className="mt-4 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {isRunning ? "Running..." : "Run Code"}
          </button>
        </div>

        {/* Output Section */}
        <div className="bg-slate-300 dark:bg-neutral-800/70 p-4 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-lg text-gray-900 dark:text-gray-300 mb-4">Output</h2>
          <pre className="text-green-400 bg-slate-500 dark:bg-gray-700 p-4 rounded-lg border border-gray-600 h-40 overflow-auto">
            {output || "Output will appear here..."}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeIDE;
