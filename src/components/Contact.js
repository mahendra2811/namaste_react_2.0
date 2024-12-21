import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 mr-4"> 
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Address:</strong> 123 Main St, Anytown, USA
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@yourcompany.com
          </p>
          <p className="mb-2">
            <strong>Social Media:</strong>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Facebook
            </a>
            {' '}
            |
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Twitter
            </a>
            {' '}
            |
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Instagram
            </a>
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Helpful Articles</h2>
          <ul className="list-disc">
            <li>
              <a href="/article1" className="text-blue-500 hover:underline">
                Article 1 Title
              </a>
            </li>
            <li>
              <a href="/article2" className="text-blue-500 hover:underline">
                Article 2 Title
              </a>
            </li>
            <li>
              <a href="/article3" className="text-blue-500 hover:underline">
                Article 3 Title
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;