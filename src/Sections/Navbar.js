import React , { useState, useContext }from 'react'
import {FaSearch,FaUser, FaSignin, FaSignout} from 'react-icons/fa'
import {Navbar,Nav,Form,Button,FormControl,Collapse,NavItem,NavLink} from 'react-bootstrap'
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom'
import { UserContext } from "../context/UserContext";
import { faUserPlus, faSignInAlt,faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css"

export default function NavBar() {
    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
<>

  <Navbar bg="dark"  fixed="top" className="textFormatting" style={{paddingBottom: "0px", paddingTop: "0px"}}>
    <Link to = "/"><Navbar.Brand href="#home" style={{paddingRight: "30px",paddingTop: "10px" ,color :"white"}}><h4> Resumely </h4></Navbar.Brand></Link>
    <Navbar className="mr-auto" >
      <Nav.Link  ><Link to="/" style={{color:"white"}}>Home </Link></Nav.Link>
      <Nav.Link  style={{paddingRight: "20px", paddingLeft: "20px",color:"white"}}><Link to ="./builder" style={{color:"white"}}>Build Resume</Link></Nav.Link>
      <Nav.Link  style={{paddingRight: "30px",color:"white"}}><Link to ="/support" style={{color:"white"}} >Support</Link></Nav.Link>
      <Nav.Link style={{paddingRight: "300px",color:"white"}}><Link to ="/feedback" style={{color:"white"}}>Feedback</Link></Nav.Link>
    
    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="srchButton" ><FaSearch/></Button>

    </Form>

        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  context.setUser(null);
                }}
                style={{paddingLeft: "170px",color:"white"}}
              >
                Logout
                  <FontAwesomeIcon icon={faSignOutAlt} style={{paddingLeft: "8px" ,fontSize :"25px",paddingTop: "5px"}}/>                  
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" style={{paddingLeft: "40px" ,color:"white"}}>
                <Link to ="/signup" style={{color:"white"}}>
                  Signup 
                  <FontAwesomeIcon icon={faUserPlus}  style={{paddingLeft: "10px" ,fontSize :"25px",paddingTop: "5px"}}/>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin"  style={{paddingLeft: "20px" ,color:"white"}}>
                <Link to ="/signin" style={{color:"white"}}>
                  Signin
                  <FontAwesomeIcon icon={faSignInAlt} style={{paddingLeft: "8px" ,fontSize :"28px",paddingTop: "5px"}}/>                  
                  </Link>
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>

  </Navbar>
</>
                  
        
 
     )
}
