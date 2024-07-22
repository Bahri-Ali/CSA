import './homepage.css'
import logo from './img/linuxlogo.png'
import QER_HOME from './homee/QeR_Home.jsx';
function Home (){
    return (
        <div>
            <div className='Home_page'>
                <img src={logo} alt="" />
                <h1>Computer Scince And Automatique</h1>
                <p>welcom to <span>CSA ANNABA</span> the open source student we are the first comunity who lear the <span>Informatiqque </span> And <span> Automatique</span></p>
            </div>
            <QER_HOME/>
        </div>
    )
}
export default Home