import './QeR.css'
import { Link } from 'react-router-dom';
function QeR(props){
    return(
        <div className="QeR">
            <li>
                <h1>{props.Q}</h1>
                <p> {props.R}</p>
                {(props.L === null)? null :<Link to={props.L}><button className='QeR_button'>من هنا</button></Link> }
            </li>
        </div>
    )
}
export default QeR