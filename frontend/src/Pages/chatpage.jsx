import React, { useState } from "react";

const ChatUI = () => {
  const [input, setInput] = useState(""); 
  const [history, setHistory] = useState([]); 

  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sender: "User", content: input }),
      });

      const data = await response.json();
      const botResponse = data.response || "No response text available.";

      setHistory((prevHistory) => [
        ...prevHistory,
        { sender: "User", content: input },
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
