import React ,{useState} from "react";
import potatopic from "./flower.jpg";
import "./chatbot.css";
import ChatMessage from "./ChatMessage";
import { analyze } from "./utils";
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Chatbot = () =>{
    const [messages,setMessages]=useState([
        {
          message: "Hi,May I have your name?"
        }
    ])
    const [text,setText]=useState('');
    const onSend = () =>{
        let list=[...messages, {message:text, user: true}];
        if(list.length>2)
        {
            const reply=analyze(text);
            list=[...messages,{message:reply}]
        }
        else{
            list=[
                ...list,
                {
                    message:`Hi, ${text}`
                },
                {
                    message:'How can i help you?',
                },
            ];
        }
        setMessages(list)
        setText("")
        setTimeout(()=>{
            document.querySelector('#copyright').scrollIntoView();
        })

    }
return (
<div>
    <div className="d-flex align-items-center justify-content-center">
    <img className="pot" src={potatopic} alt=""/> 
    <h2>PoTaTo Bot</h2>
    </div>
    <div className="chat-message">
{
    messages.length>0 && messages.map((data) =><ChatMessage {...data} />)
}
<div className="d-flex mt-2">
    <input type='text' className="form-control" value={text} onChange={(e) => setText(e.target.value)}/>
    <button type="primary" className="ms-3" onClick={onSend}>Send</button>
</div>
<div id='copyright' className="mt-3">Copyrights reserved MandrakeMystic</div>
    </div>
   
</div>
);
}
export default Chatbot;