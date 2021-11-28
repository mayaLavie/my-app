import AboutComp from './Components/Pages/About/AboutComp';
import EducationComp from './Components/Pages/Education/EducationComp';
import ProjectsComp from './Components/Pages/Projects/ProjectsComp';
import ContactsComp from './Components/Pages/Contacts/ContactsComp';
import HomeComp from './Components/Pages/Home/HomeComp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './Components/Navbar.css';
import './App.css';
import NavbarComp from './Components/NavbarComp';

function App () {
  return (
    <div className="Navbar"  >
      <Router>
           <NavbarComp/>
                <Switch>
                <Route exact path="/" component={HomeComp} />
                <Route  path="/About" component={AboutComp} />
                <Route  path="/Education" component={EducationComp} />
                <Route  path="/Projects" component={ProjectsComp} />
                <Route  path="/Contacts" component={ContactsComp} />
              </Switch>
      </Router>
   </div>
  );
}
export default App;
