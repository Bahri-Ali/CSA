import { IoSend } from "react-icons/io5";
import { MdInsertPhoto } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
// import { RiArrowGoBackFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import './chat.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useRef, useState } from "react";
// import {Link, Route} from 'react-router-dom'

function Chate(){
    const {user } = useAuth0();
    const [messege , Setmessege] = useState("")
    const [messeges , Setmesseges] = useState([])
    const inpurRef = useRef(null)
    const key = new Date()
    function Send_messeg(){
        Setmesseges([...messeges ,messege] )
        Setmessege('')
        inpurRef.current.value=''
    }
    let All_messege = messeges.map(ele=>
        <div>
            <div className="messege" key={key.getMilliseconds}><p>{ele}</p></div>
        </div>
    )
    return(
        <div className="Chat">
            <div className='information'>
                <div className='user_chat'>
                    {/* <Link to='/' ><RiArrowGoBackFill/></Link> */}
                    <img src={user.picture} alt="" />
                    <h3>{user.nickname}</h3>
                </div>
                <div className='vedio_call'>
                    <IoCall/>
                    <FaVideo/>
                </div>
            </div>
            <div className='messege_continer'>
                {/* <div>
                    <div className="messege"><p>{messege}</p></div>
                </div> */}
                {All_messege}
            </div>
            <div className='para'>
                <input type="text" ref={inpurRef} className='messege_input' placeholder='Write Mwssege.....' onChange={(e)=>{
                    Setmessege(e.target.value)
                }}/>
                <div className='icons'>
                    <IoSend onClick={Send_messeg}></IoSend>
                    <MdKeyboardVoice/>
                    <MdInsertPhoto><input type="image" src="" onClick={()=>{
                        window.open('Desktop')
                    }} alt="" /></MdInsertPhoto>
                </div>
            </div>
        </div>
    )
}
export default Chate