import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-4">Feel free to reach out to me on my social media platforms or send me an email.</p>
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="h-8 w-8 text-black hover:text-gray-600" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="h-8 w-8 text-black hover:text-gray-600" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="h-8 w-8 text-black hover:text-gray-600" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 text-black hover:text-gray-600" />
        </a>
      </div>
      <div className="mt-8">
        <a href="mailto:your-email@example.com" className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-800 transition">
          Send Me an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
