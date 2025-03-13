import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../../components/contact-form/CotactForm";
import ContactDetails from "../../components/contact-details/ContactDetails";

const Contact = () => {
  return (
    <div className="min-h-screen text-gray-700 dark:text-gray-300 flex flex-col items-center p-6">
      <Helmet>
        <title>NetLab | Contact</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center mb-10">Contact Us</h1>
      <div className="max-w-5xl w-full py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactDetails />
          <div className="lg:p-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
