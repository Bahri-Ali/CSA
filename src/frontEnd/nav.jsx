import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';
function Nav(){
    let nav=['Home' , 'About','Linux.D', 'Chat' , 'Destription'];
    // let nav_path=['' , 'About','Linux.D', 'Chat' , 'Destription'];
    let nav_list=nav.map(ele=>
        <Link to={ele==='Home'?'':ele} key={ele}>{ele}</Link>
    )
    return(
        <nav>
            <ul className='ul_list'>
                {nav_list}
            </ul>
        </nav>
    )
}

export default Nav