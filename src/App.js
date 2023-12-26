
import './CSS/App.css';
import Navbar from './components/navbar';
import Home from './PAGES/home';
import Aboutme from './PAGES/aboutMe';
import Skills from './PAGES/skills';
import Projects from './PAGES/projects';
import Services from './PAGES/services';
import Contacts from './PAGES/contacts';
import Footer from './PAGES/footer';
// import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
       <Navbar></Navbar>
       <Home></Home>
       <Aboutme></Aboutme>
       <Skills></Skills>
       <Projects></Projects>
      <Services></Services>
      <Contacts></Contacts>
      <Footer></Footer>
      
      {/* <Router> */}
         {/* <Route pathname="projectCollections" element={<projectCollections></projectCollections>}></Route> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
