import React, { useState, useEffect } from "react";
import { generateResponse } from "../../../backend/chat"; // Assuming this is correct

const ChatUI = () => {
  const [input, setInput] = useState(""); // State for user input
  const [history, setHistory] = useState([]); // State for chat history

  // Function to refresh chat history
  const refreshChatHistory = () => {
    setHistory([...history]); // This might not be necessary; adjust as needed
  };

  // Handle sending messages
  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const response = await fetch('/api/chat/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: input }), // Ensure this matches your API
      });

      const data = await response.json();
      const botResponse = data.response || "No response text available.";
      
      // Update chat history with user input and bot response
      setHistory((prevHistory) => [
        ...prevHistory,
        { sender: "User ", content: input },
        { sender: "Bot", content: botResponse },
      ]);

      setInput("");
    } catch (error) {
      console.error("Error in sendMessage:", error);
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
          <div key={index} className={`message ${sender.toLowerCase()}`}>
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

export default ChatUI;