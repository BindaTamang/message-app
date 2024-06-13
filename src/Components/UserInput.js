import React, {useState} from "react";

const UserInput = ({addMessage, user}) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim() !== ''){
            addMessage(text, user)
            setText('')
        }

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder={`type a message`}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default UserInput;
