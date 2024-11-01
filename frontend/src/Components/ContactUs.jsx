import React, { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // New state to track success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');
    setIsSuccess(false); // Reset success state

    const contactData = { name, email, message };

    try {
      const response = await fetch('https://portfolio-3-93cz.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        const data = await response.json();
        setFeedback(data.message); // Notify the user of success
        setIsSuccess(true); // Set success state
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFeedback('Failed to save contact. Please try again.');
        setIsSuccess(false); // Set failure state
      }
    } catch (error) {
      console.error('Error:', error);
      setFeedback('An error occurred while submitting the form.');
      setIsSuccess(false); // Set failure state
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold font-londrina">Contact Me</h2>
        <p className="mt-4 text-lg">I’d love to hear from you! Fill out the form below:</p>

        <div className={`mt-10 shadow-lg rounded-lg p-8 mx-auto w-full max-w-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className={`border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${isDarkMode ? 'bg-gray-600 text-white' : ''}`} 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className={`border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${isDarkMode ? 'bg-gray-600 text-white' : ''}`} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <textarea 
              placeholder="Your Message" 
              className={`border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${isDarkMode ? 'bg-gray-600 text-white' : ''}`} 
              rows="5" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button 
              type="submit" 
              className={`bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
          {feedback && (
            <p className={`mt-4 text-lg ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {feedback}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
