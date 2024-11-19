import React, { useState, useEffect } from "react";
import { generateResponse, chatHistory } from "../../../backend/chat";
import "./chatpage.css";

export const ChatUI = () => {
  const [input, setInput] = useState(""); // State for user input
  const [history, setHistory] = useState([]); // State for chat history

  useEffect(() => {
    // Initialize chat history from backend
    setHistory(chatHistory);
  }, []);

  // Function to refresh chat history
  const refreshChatHistory = () => {
    setHistory([...chatHistory]);
  };

  // Handle sending messages
  const sendMessage = async () => {
    if (!input.trim()) return; // Skip empty inputs
  
    try {
      // Call the backend function to generate a response
      const botResponse = await generateResponse(input);
      console.log("Raw Bot Response:", botResponse); // Debugging to see the full response
  
      // Ensure botResponse is a string or fallback message
      const responseText = typeof botResponse === 'string' ? botResponse : "No response text available.";
  
      // Update chat history with the user and bot messages
      setHistory((prevHistory) => [
        ...prevHistory,
        { sender: "User", content: input },
        { sender: "Bot", content: responseText },
      ]);
  
      setInput(""); // Clear the input field after sending the message
    } catch (error) {
      console.error("Error in sendMessage:", error); // Debugging error messages
  
      // Update chat history with an error message
      setHistory((prevHistory) => [
        ...prevHistory,
        { sender: "Error", content: "Failed to fetch a response. Please try again." },
      ]);
    }
  }; 

  return (
    <div className="container">
      {/* Chat history display */}
      <div className="chat-display">
        {history.map(({ sender, content }, index) => (
          <div
            key={index}
            className={`message ${sender.toLowerCase()}`}
          >
            {sender}: {content}
          </div>
        ))}
      </div>

      {/* Input field and send button */}
      <div>
        <input
          className="input-field"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};