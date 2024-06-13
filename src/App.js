import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import UserInput from './Components/UserInput';
import MessageList from './Components/MessageList';

function App() {
const [messages, setMessages] = useState([])
const addMessage = (text, user) => {
  setMessages([...messages, {id: messages.length, text, user}])

}
  return (
    <>
      <Router>
        <div className='app'>
        <div className='user-box'>
          <h1>User 1</h1>
          <UserInput 
          addMessage={addMessage}
          user="User 1"
          />
        </div>
        <div className='message-box'>
          <h1>Message</h1>
          <MessageList messages={messages}/>
        </div>
        <div className='user-box'>
          <h1>User 2</h1>
          <UserInput 
          addMessage={addMessage}
          user="User 2"
          /> 
        </div>
        </div>
      </Router>
    </>
  );
}

export default App;
