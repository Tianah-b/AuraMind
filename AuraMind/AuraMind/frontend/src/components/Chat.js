import React, { useState, useEffect, useRef } from 'react';
import '../styles/Chat.css'; 

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const chatContainerRef = useRef(null); 

    const sendMessage = async () => {
        if (chatInput.trim() === '') {
            return;
        }

        const userMessage = { role: 'user', content: chatInput };
        setMessages((prev) => [...prev, userMessage]);

        try {
            const response = await fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: chatInput }),
            });

            const result = await response.json();
            const chatbotMessage = { role: 'chatbot', content: result.response };

            setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
        } catch (error) {
            console.error('Error:', error);
        }

        setChatInput('');
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]); 

    return (
        <div id="chat-form"> {}
            <div id="chat-container" ref={chatContainerRef}> {}
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.role === 'user' ? 'user-message' : 'chatbot-message'}`}
                    >
                        {msg.role === 'user' ? `You: ${msg.content}` : `Chatbot: ${msg.content}`}
                    </div>
                ))}
            </div>

            <div id="input-container"> {}
                <input
                    type="text"
                    id="chat-input"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button id="send-button" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
