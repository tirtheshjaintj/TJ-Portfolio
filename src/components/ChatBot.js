import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaHistory, FaPlane } from "react-icons/fa";
import './ChatBot.css'; // Custom CSS for pixel-perfect adjustments
const url = "https://portfolio-backend-omega-ten.vercel.app";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [{ sender: 'AI', text: 'Hi, how can I help you today?' }];
  });

  const chatContainerRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { sender: 'You', text: input };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput('');
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

      try {
        const response = await axios.post(`${url}/groq`, { prompt: input });
        const botMessage = { sender: 'AI', text: response.data };
        const updatedMessagesWithBot = [...updatedMessages, botMessage];
        setMessages(updatedMessagesWithBot);
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessagesWithBot));
      } catch (error) {
        console.log(error);
        const errorMessage = { sender: 'AI', text: 'Sorry, an error occurred. Please try again later.' };
        const updatedMessagesWithError = [...updatedMessages, errorMessage];
        setMessages(updatedMessagesWithError);
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessagesWithError));
      }
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const clearChatHistory = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to clear the chat history?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setMessages([{ sender: 'AI', text: 'Hi, how can I help you today?' }]);
        localStorage.removeItem('chatMessages');
        Swal.fire('Cleared!', 'Your chat history has been cleared.', 'success');
      }
    });
  };

  return (
    <div>
      {/* Chatbot Button */}
      <button
        onClick={toggleChatbot}
        className="btn float2 chatbot-btn rounded-circle position-fixed bottom-4 end-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </button>

      {/* Chatbot UI */}
      <div
        className={`chatbot-container ${isOpen ? 'show' : ''} shadow-lg position-fixed end-0 rounded-3`}
      >
        {/* Chatbot Header */}
        <div className="chatbot-header d-flex justify-content-between align-items-center py-2 px-3 border-bottom">
          <div className="d-flex align-items-center">
            <h2 className="h5 mb-0 me-2 ">JARVIS</h2>
            <button onClick={clearChatHistory} className="btn btn-sm text-white">
              <FaHistory className='fs-4' />
            </button>
          </div>
          <button onClick={toggleChatbot} className="btn btn-close text-white" />
        </div>

        {/* Chat Messages */}
        <div
          ref={chatContainerRef}
          className="chatbot-messages overflow-auto p-3"
        >
          {messages.map((msg, index) => (
            <div key={index} className={`d-flex ${msg.sender === 'AI' ? 'justify-content-start' : 'justify-content-end'}`}>
              
              <div className={`p-2 rounded-3 m-2 ${msg.sender === 'AI' ? 'bg-light text-black' : 'bg-primary text-white'}`}>
                <strong>{msg.sender}</strong>
                <pre className='msgchat'>{msg.text}</pre>
              </div>

            </div>
          ))}
        </div>

        {/* Input Box */}
        <form onSubmit={handleSubmit} className="d-flex px-2">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary"><span className='d-flex align-items-center'>Send&nbsp;<FaPlane/></span></button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
