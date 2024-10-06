import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="p-10 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-4">Feel free to send me a message through the form below:</p>

      {/* Form */}
      <form 
        action="https://formsubmit.co/your-email@example.com" 
        method="POST"
        className="flex flex-col items-center space-y-4"
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleInputChange} 
          className="w-full max-w-md p-2 border border-gray-400 rounded" 
          required 
        />

        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleInputChange} 
          className="w-full max-w-md p-2 border border-gray-400 rounded" 
          rows="4" 
          required
        ></textarea>

        {/* Hidden inputs for additional settings */}
        <input type="hidden" name="_captcha" value="false" /> 
        <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />

        <button 
          type="submit" 
          className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6">
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
    </section>
  );
};

export default Contact;
