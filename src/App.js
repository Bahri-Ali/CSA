import './App.css';
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import Chat from './frontEnd/chat/chat.jsx'
import Nav from './frontEnd/nav.jsx'
import Header from './frontEnd/header.jsx'
import Home from './frontEnd/homepage.jsx';
import Fother from './frontEnd/Fother.jsx'
import Linux from './frontEnd/linux.jsx'
import Information from './frontEnd/information.jsx'
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Nav></Nav>
      <Routes>
        <Route path='/chat' element={<Chat/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/linux.D' element={<Linux/>}></Route>
        <Route path='/about' element={<Information/>}></Route>
      </Routes>
      <Fother></Fother>
    </BrowserRouter>
  );
}
export default App;
