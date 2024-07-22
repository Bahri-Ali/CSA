import './about.css'
function Absection(props){
    return(
        <div className='about'>
            <div className='about_title'><h1>{props.t}</h1></div>
            <div className='about_para'><p>{props.p}</p></div>
        </div>
    )
}
export default Absection