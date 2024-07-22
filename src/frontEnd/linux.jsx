import { Link } from "react-router-dom"
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";


import vscode from './img/VS.png'
import ds from './img/DISCOUR.webp'
import AR from './img/ARD.png'
import node from './img/nodejs.webp'
import SQL from './img/sql2.png'
import PC from './img/PC.png'


import img1 from './img/imgLinux1.jpg'
import img2 from './img/linux3.jpg'
import img3 from './img/linux4.jpg'
import img4 from './img/linux5.jpg'


import './Linux.css'
import { useState } from "react";


function Linux(){
    const imgs=[img1 ,img2 ,img3 , img4 ]
    let [idImg,SetidImg ]  = useState(0) 
    let [ img , Setimg]=useState(imgs[idImg])
    function nexIMG(){
        SetidImg(idImg === 3 ? 0 : idImg++)
        Setimg(imgs[idImg])
    }
    function preImg(){
        SetidImg(idImg === 0 ? 3 : idImg--)
        Setimg(imgs[idImg])
    }
    return(
        <div className="linux_continer">
            <h1>LINUX DESTRIPUTER</h1>
            <div className="icons_pc">
                <img src={vscode} alt="" />
                <img src={ds} alt="" />
                <img src={AR} alt="" />
                <img src={node} alt="" />
                <img src={SQL} alt="" />
                <img src={PC} alt="" />
            </div>
            <p>مرحبا بكم ، في هاته صفحة نقدم لكم نظام تشغيل مفتوح المصدر  و  هو ما يسهل عليك دخول في عالم تكنلولجيا الحديثة حيث يحتوي على اغلبية برامج اللازمة في مشوارك الدراسي و مهني نعرض عليكم بعض برامج و صور خاصة بنظام تشغيل </p>
            <div className="img_continer">
                <img src={img} alt="" />
            </div>
            <div className="button_change">
                <button onClick={preImg} ><GrFormPrevious/></button>
                <button onClick={nexIMG}><MdOutlineNavigateNext/></button>
            </div>
            <button ><Link to='https://drive.usercontent.google.com/download?id=13CqD_uSBzkwYGb9i1RdwLEc5A33F1ZH5&export=download&authuser=0&confirm=t&uuid=d7932129-0cc3-487f-928a-5ddbfbfec358&at=APZUnTWv-CEpGl8OIU27onWlZcjK%3A1721001738893'>تحميل <MdFileDownload/></Link></button>
        </div>
    )
}
export default Linux