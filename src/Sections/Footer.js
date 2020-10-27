import React from 'react'
import {FaHeart,FaFacebook,FaTwitter,FaLinkedin,FaGithub,FaEnvelope} from 'react-icons/fa'
import '../App.css'

export default function Footer() {
    return (
        <footer>
          <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dark" id="footer" fixed="bottom">
            <a className="navbar-brand textFormatting" style={{paddingTop: "10px", paddingLeft: "10px"}}><h4><b>Resumely</b></h4></a>

            <div className="love"  style={{ paddingLeft:"500px"}}>
              <span style={{ color:"grey"}}  > Made with </span>
              <i  style={{color: "red", paddingLeft:"5px",paddingRight:"5px"}}><FaHeart></FaHeart></i>
              <span style={{ color:"grey"}}> in India</span>
            </div>

            <div className="ml-auto">
              {/* <!--Facebook--> */}
              <a className="fb-ic mr-3" role="button" style={{fontSize:"25px"}}><FaFacebook /></a>
              {/* <!--Twitter--> */}
              <a className="tw-ic mr-3" role="button" style={{fontSize:"25px"}}><FaTwitter /></a>
              {/* <!--Linkedin--> */}
              <a className="li-ic mr-3" role="button" style={{fontSize:"25px"}}><FaLinkedin /></a>
              {/* <!--Stack Overflow--> */}
              {/* <!--Github--> */}
              <a className="git-ic mr-3" role="button" style={{fontSize:"25px"}}><FaGithub /></a>
              {/* <!--Email--> */}
              <a className="email-ic mr-3" role="button" style={{fontSize:"25px"}}><FaEnvelope /></a>
            </div>
          </nav>
      </footer>

    )
}
