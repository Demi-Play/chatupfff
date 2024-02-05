import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatNav from './components/chat-nav/ChatNav'
import ChatHeader from './components/chat-header/ChatHeader'
import LeftBarHeader from './components/bar-figures/LeftBarHeader'
import ChatsBar from './components/bar-figures/ChatsBar'
import MainWrapp from './components/UI/MainWrapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ChatNav />
      <ChatHeader />
      <LeftBarHeader /> */}
      <MainWrapp />
        {/* <ChatsBar /> */}
    </>
  )
}

export default App
