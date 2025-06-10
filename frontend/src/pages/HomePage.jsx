import React from 'react';
import { useChatStore } from '../store/useChatStore.js';
import ChatContainer from '../components/ChatContainer.jsx';
import NoChatSelected from '../components/NoChatSelected.jsx';
import Sidebar from '../components/sidebar.jsx';

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-full flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-base-300 overflow-y-auto">
        <Sidebar />
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b border-base-300">
          {/* You can also conditionally render ChatHeader here */}
        </div>
        <div className="flex-1 overflow-y-auto">
          {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
