import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './App.css'
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Aboutus from './component/Aboutus/Aboutus';

function App() {

  return (
    <>
     <Header/>
     <Banner/>  
     <Aboutus/>
    </>
   
  );
}

export default App
