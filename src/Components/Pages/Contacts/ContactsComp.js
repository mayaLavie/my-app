
import {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee}  from "@fortawesome/free-solid-svg-icons"
import {faGithub , faLinkedin} from "@fortawesome/free-brands-svg-icons"
import '../Contacts/Contacts.css'

class ContactsComp extends Component {
  render() 
  { 
    return(
          <div class="Details text-center  " >
              <h1>Keep In Touch.</h1>
              <ul>
                <li><a href="https://www.linkedin.com/in/maya-lavie-5ab7965b/">        
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                <li><a href="https://github.com/mayaLavie">        
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                <li><a href="mailto:mayulavi@gmail.com">        
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></a></li>
             </ul>         
        </div>
  
    )
  }
}
export default ContactsComp;
