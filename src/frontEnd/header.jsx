import './Header.css'
import { useAuth0 } from "@auth0/auth0-react";
import {React} from 'react';
function Header(){
    const {  user,isAuthenticated,  } = useAuth0();
    const { logout } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    return(
        
        <header>
            <div>
                <img src={require('./img/linuxlogo.png')} alt="" />
                <div className="title">
                    <h1>CSA</h1>
                    <h4>Computer science And Automatique</h4>
                </div>
            </div>
            {
                isAuthenticated?(
                    <div className='LOgout'>
                        <div className='user'>
                            <img src={user.picture} alt="" className='UserImage' />
                            <h3 className='UserName'>{user.nickname}</h3>
                        </div>
                        <button className='conect' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) }>تسجيل الدخول</button>
                    </div>
                ):(
                    <button className='conect' onClick={() => loginWithRedirect()}>تسجيل الدخول</button>
                )
            }
        </header>
    )
}
export default Header