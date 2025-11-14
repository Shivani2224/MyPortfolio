import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const submitButton = e.target.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  emailjs
    .send(
      'service_sc18r7t',
      'template_025gpql',

      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'GjjHAOy4gaDCieGl1'
    )
    .then(() => {
      alert("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send Message <span class="ml-2">→</span>';
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send Message <span class="ml-2">→</span>';
    });
};

  return (
    <section id="contact" className="py-20 bg-teal-50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-5 text-primary-dark font-bold">
            Let's Work Together
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg max-w-2xl mx-auto">
            Got a project in mind? Need a developer? Or just want to say hi? Drop me a message!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary-dark">
                  Let's Connect
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  I'm currently open to new opportunities and collaborations.
                  If you're looking for someone who's eager to learn and contribute
                  to your team, let's talk! I respond pretty quickly (usually within 24 hours).
                </p>
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <FaEnvelope className="text-primary text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:patelshivani1410@gmail.com"
                      className="text-primary hover:underline transition-all"
                    >
                      patelshivani1410@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <FaMapMarkerAlt className="text-primary text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-1">
                      Location
                    </h4>
                    <p className="text-slate-600">Ontario, Canada</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <FaPhone className="text-primary text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-1">
                      Availability
                    </h4>
                    <p className="text-slate-600">Mon-Fri, 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold mb-3 text-primary-dark">
                  Connect with me
                </h4>
                <div className="flex gap-4 justify-center">
                  <motion.a
                    href="https://www.linkedin.com/in/shivani-patel-aa2846178"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center text-xl no-underline transition-all duration-300 hover:bg-primary-dark"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Shivani2224"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center text-xl no-underline transition-all duration-300 hover:bg-primary-dark"
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-dark">
                  Say Hello 👋
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-3 border-2 border-gray-200 rounded-lg text-base outline-none transition-colors focus:border-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 border-2 border-gray-200 rounded-lg text-base outline-none transition-colors focus:border-primary"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-base outline-none transition-colors focus:border-primary mb-4"
                />

                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-lg text-base outline-none transition-colors focus:border-primary mb-6 resize-vertical min-h-[150px]"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 bg-primary text-white border-none rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-primary-dark"
                >
                  Send Message
                  <span className="ml-2">→</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
