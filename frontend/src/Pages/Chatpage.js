import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Chatpage = () => {

  const [chats, setChats] = useState([]); // Initialize with an empty array
  const fetchChats = async () => {
    const response = await axios.get('/api/chat');
    const data = response.data; // Access the data property
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div> // Add a key prop to each item
      ))}
    </div>
  );
};

export default Chatpage;