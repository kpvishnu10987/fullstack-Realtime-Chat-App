import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 bg-base-100">
      <div className="text-center space-y-4 max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-primary">Welcome to Chatty!</h2>
        <p className="text-base-content/60">Select a conversation from the sidebar to start chatting</p>
      </div>
    </div>
  );
};

export default NoChatSelected;
