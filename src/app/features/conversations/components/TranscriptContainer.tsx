import React, { useEffect, useState } from "react";
import Message from "./Message";
import { getConversationMessages } from "./fetcher";
import { WhatsAppMessage } from "./fetcher/types";
import { Skeleton } from "@/components/ui/skeleton";

const TranscriptContainer: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const data = await getConversationMessages();
        
  
        if (data.response?.whatsapp) {
          const whatsappMessages = data.response?.whatsapp;
          const formattedMessages = whatsappMessages.map((msg) => {
            const isAgent = msg.postedByUserNumber === msg.whatsappNumber;
  
            return {
              id: msg.id,
              sender: isAgent ? "Kapture Agent" : "Customer",
              role: isAgent ? "agent" : "customer",
              text: msg.message,
              timestamp: msg.createdTime,
            };
          });
  
          setMessages(formattedMessages);
        }
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
  
    fetchMessages();
  }, []);
  

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="w-full px-3 py-4 bg-white border-b border-gray-200 flex justify-start items-center">
        <h2 className="flex-1 text-gray-800 text-lg font-medium leading-6">
          Conversation Transcript
        </h2>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md flex-1">
        {loading ? (
          <div>
            {/* Skeleton Loader for Messages */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex space-x-4 mb-4">
                {/* Skeleton for Avatar */}
                <Skeleton className="w-10 h-10 rounded-full bg-gray-300" />
                {/* Skeleton for Text */}
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4 bg-gray-300" />
                  <Skeleton className="h-4 w-1/2 bg-gray-300" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <Message
                  key={msg.id}
                  sender={msg.sender}
                  role={msg.role}
                  text={msg.text}
                  timestamp={msg.timestamp}
                />
              ))
            ) : (
              <div className="text-gray-500 text-center w-full">
                No messages found.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TranscriptContainer;
