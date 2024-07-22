import './chat.css'
import Chate from './chat_true';
import { useAuth0 } from "@auth0/auth0-react";
import loginImg from '../img/login.svg'
import { useEffect } from 'react';
function Chat(){
    const { isAuthenticated  } = useAuth0();
    function IsConnect(){
        if (isAuthenticated) {
            return <Chate/>
        }else{
            return <div className='NotConnect'>
                <h1>you chould connect to join this chat <span>!!</span> </h1>
            </div>
        }
    }
    return(
        <div className='Chat_continer'>
            {IsConnect()}
        </div>
    )
}
export default Chat