import React from "react";
import ChatBot from "~/screens/chat-bot";
import { ChatBotProvider } from "./src/providers/chatbot-provider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ChatBotProvider>
        <ChatBot />
      </ChatBotProvider>
    </SafeAreaProvider>
  );
}
