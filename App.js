import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ChatBot from '~/screens/chat-bot'
import { ChatBotProvider } from './src/providers/chatbot-provider'

export default function App () {
    return (
        <SafeAreaProvider>
        <ChatBot />
        </SafeAreaProvider>
    )
}
