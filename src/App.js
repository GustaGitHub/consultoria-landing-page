//Reload CSS
import './App.css';

//Components
import NavBar from './components/navBar'
import FirstPart from './components/firstPart'
import Depositions from './components/depositions'
import ListServices from './components/listServices'
import Contacts from './components/contacts';
import Footer from './components/footer';

function App() {
  return (
    <>
      <NavBar/>
          <FirstPart/>
        <br/><br/>
          <ListServices/>
        <br/><br/>
          <Depositions/>
        <br/><br/>
          <Contacts/>
        <br/><br/>
          <Footer/>
    </>
  );  
}

export default App;
