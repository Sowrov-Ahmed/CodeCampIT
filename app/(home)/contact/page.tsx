'use client'
import React, { useState, FormEvent } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Using more common/sleek versions
import { FaWhatsapp } from "react-icons/fa"; // Whatsapp
import { ImPhone } from "react-icons/im";
import { MdEmail, MdLocationPin } from "react-icons/md"; // Using MdLocationPin for a common map pin

const Page = () => {
  const [state, handleSubmitFormspree] = useForm("mbloweke"); // Renamed to avoid conflict with potential custom handleSubmit
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Wrapper for handleSubmitFormspree to include our formData
  // Formspree's handleSubmit can also automatically pick up form data if fields have `name` attributes
  // This explicit passing is fine too.
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmitFormspree(formData); // Or pass event directly: handleSubmitFormspree(event)
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61576552769114", label: "Facebook" }, // Added href and label for accessibility/functionality
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/codecamp-it/", label: "LinkedIn" },
    { icon: <FaWhatsapp />, href: "https://wa.me/8801725125455", label: "WhatsApp" }
  ];

  const contactDetails = [
    { icon: <MdEmail />, title: 'codecampit@gmail.com', href: 'mailto:codecampit@gmail.com' },
    { icon: <ImPhone />, title: '+880 1725125455', href: 'tel:+8801725125455' },
    { icon: <MdLocationPin />, title: <>Kuril, <br />Dhaka-1229.</>, href: 'https://maps.app.goo.gl/CcXeTVmgMvvVvWgf9' } // Add a maps link if available
  ];

  if (state.succeeded) {
    return (
      <main className="bg-slate-50 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="bg-white p-8 sm:p-10 md:p-12 rounded-xl shadow-2xl text-center max-w-lg animate-fade-in-up">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Thank You!</h3>
          <p className="text-slate-600 text-base sm:text-lg">
            Your message has been sent successfully. We appreciate you contacting us and will get back to you soon.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-100 min-h-screen py-12 sm:py-16 px-4">
      <section className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800  font-newAcademy ">Contact Us</h1>
          <p className="text-slate-600 mt-3 sm:mt-4 text-lg sm:text-xl max-w-2xl mx-auto font-montserrat">
            We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl">
          {/* Left Side: Contact Info & Social Links */}
          <div className="w-full lg:w-2/5">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-6">
              Contact Information
            </h3>
            <div className="space-y-5">
              {contactDetails?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-indigo-50 group"
                >
                  <div className="text-indigo-600 text-2xl mt-1 group-hover:text-indigo-700 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                      {item.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-slate-700 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-indigo-600 transition-colors duration-300 text-2xl p-2 bg-slate-100 rounded-full hover:bg-indigo-100"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-3/5">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-6">
              Send Us a Message
            </h3>
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-5 sm:gap-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  placeholder='Enter your full name'
                  name="name"
                  onChange={handleChange}
                  type="text"
                  value={formData.name}
                  className='w-full px-4 py-2.5 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-white text-slate-900 placeholder-slate-400'
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address <span className='text-red-600 text-sm'>*</span>
                </label>
                <input
                  id="email"
                  placeholder='you@example.com'
                  name="email"
                  onChange={handleChange}
                  type="email"
                  value={formData.email}
                  className='w-full px-4 py-2.5 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-white text-slate-900 placeholder-slate-400'
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number <span className="text-red-600 text-sm">*</span>
                </label>
                <input
                  id="phone"
                  placeholder='Enter your phone number'
                  name="phone"
                  onChange={handleChange}
                  type="tel" // Changed to "tel" for better semantics
                  value={formData.phone}
                  className='w-full px-4 py-2.5 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-white text-slate-900 placeholder-slate-400'
                  required
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Write your message here...'
                  className="w-full px-4 py-2.5 rounded-md border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-white text-slate-900 placeholder-slate-400"
                  onChange={handleChange}
                  value={formData.message}
                  rows={5}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 px-6 rounded-md font-semibold text-white bg-indigo-600 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  {state.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
       {/* Add a simple footer if needed, or integrate into your site's global footer */}
      <footer className="text-center py-10 mt-12 sm:mt-16">
        <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} CodeCamp IT . All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Page;

