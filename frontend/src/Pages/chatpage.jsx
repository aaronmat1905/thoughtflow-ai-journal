import React, { useState, useEffect } from "react";
import { generateResponse, chatHistory } from "C:/Users/Aaron/Documents/Aaron's Work - Volume 1/MERNjournal/thoughtflow-journal-ai/backend/chat.js";
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
    if (!input.trim()) return;
  
    try {
      const botResponse = await generateResponse(input);
      console.log("Bot Response for Rendering:", botResponse);
  
      // Ensure botResponse is a string
      setHistory((prevHistory) => [
        ...prevHistory,
        { sender: "User", content: input },
        { sender: "Bot", content: botResponse || "No response text available." },
      ]);
      setInput(""); // Clear the input field
    } catch (error) {
      console.error("Error in sendMessage:", error);
      setHistory((prevHistory) => [
        ...prevHistory,
        { sender: "Error", content: "Failed to fetch a response. Try again." },
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