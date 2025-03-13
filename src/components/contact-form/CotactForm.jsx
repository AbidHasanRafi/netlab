import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_behhdpk",
        "template_t3wf22j",
        form.current,
        "m0x5OfLgq2uijqp2j"
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setStatus("Failed to send email.");
        }
      );
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 p-6">
      <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Contact Form
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-neutral-900 dark:border-gray-700 dark:focus:ring-indigo-400"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-neutral-900 dark:border-gray-700 dark:focus:ring-indigo-400"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-neutral-900 dark:border-gray-700 dark:focus:ring-indigo-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          Send
        </button>
      </form>
      {status && (
        <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
