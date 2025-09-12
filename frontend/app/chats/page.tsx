"use client"
import axios from "axios";
import { useEffect, useState } from "react";

type Chat = {
  isGroupChat: boolean;
  users: { name: string; email: string }[];
  _id: string;
  chatName: string;
  groupAdmin?: { name: string; email: string };
};

export default function ChatPage() {
  const [chats, setChats] = useState<Chat[]>([]);

  const fetchChats = async () => {
    const { data } = await axios.get<Chat[]>("http://localhost:5001/api/chat"); // specify generic type
    // console.log(data)
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <h1>Welcome to ChatPage</h1>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}
