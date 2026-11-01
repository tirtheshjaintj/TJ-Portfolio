import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaHistory, FaPaperPlane, FaTimes } from "react-icons/fa";
import './ChatBot.css'; // Custom CSS for pixel-perfect adjustments
const url = "https://portfolio-backend-omega-ten.vercel.app";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    if (input.trim() && !isLoading) {
      const promptText = input;
      const userMessage = { sender: 'You', text: promptText };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput('');
      setIsLoading(true);
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
      try {
        const response = await axios.post(`${url}/groq`, { prompt: promptText, history: JSON.stringify(updatedMessages) });
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
      } finally {
        setIsLoading(false);
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
        aria-label={isOpen ? "Close JARVIS chat assistant" : "Open JARVIS chat assistant"}
        aria-expanded={isOpen}
        title="Chat with JARVIS"
        className="btn float2 chatbot-btn rounded-circle position-fixed bottom-4 end-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </button>

      {/* Chatbot UI */}
      <div
        className={`chatbot-container ${isOpen ? 'show' : ''} shadow-lg position-fixed end-0 rounded-3`}
        aria-hidden={!isOpen}
      >
        {/* Chatbot Header */}
        <div className="chatbot-header d-flex justify-content-between align-items-center py-2 px-3 border-bottom">
          <div onClick={clearChatHistory} className="d-flex align-items-center justify-content-center" role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && clearChatHistory()} title="Clear chat history" aria-label="Clear chat history">
            <h2 className="h5 mb-0 me-2 ">JARVIS</h2>
            <FaHistory className='fs-4' aria-hidden="true" />
          </div>
          <button type="button" className="btn btn-link text-white p-0 border-0" onClick={toggleChatbot} aria-label="Close chat" title="Close chat">
            <FaTimes className='fs-4' aria-hidden="true" />
          </button>
        </div>

        {/* Chat Messages */}
        <div
          ref={chatContainerRef}
          className="chatbot-messages overflow-auto p-3"
          aria-live="polite"
        >
          {messages.map((msg, index) => (
            <div key={index} className={`d-flex ${msg.sender === 'AI' ? 'justify-content-start' : 'justify-content-end'}`}>

              <div className={`p-2 rounded-3 m-2 ${msg.sender === 'AI' ? 'bg-light text-black' : 'bg-primary text-white'}`}>
                <pre className='msgchat'>{msg.text}</pre>
              </div>

            </div>
          ))}
          {isLoading && (
            <div className="d-flex justify-content-start">
              <div className="p-2 rounded-3 m-2 bg-light text-secondary d-flex align-items-center">
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                <span className="small">JARVIS is thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Box */}
        <form onSubmit={handleSubmit} className="d-flex msgform msgbox">
          <input
            type="text"
            className="w-100 p-3"
            placeholder="Ask Anything about Tirthesh..."
            aria-label="Message input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading || !input.trim()}
            aria-label={isLoading ? "Sending message..." : "Send message"}
            title="Send message"
          >
            <span className='d-flex align-items-center'>
              {isLoading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : (
                <FaPaperPlane className='fs-5' aria-hidden="true" />
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
