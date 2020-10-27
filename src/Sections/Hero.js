import React from 'react'
import { Slide } from 'react-slideshow-image';
import Amlan from "../images/Amlan.jpg"
import Testasset from "../images/Testasset.png"
import Carousel from 'react-bootstrap/Carousel'
import { FaUserSecret, FaWalking } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { RiRefreshLine } from 'react-icons/ri';
import {FaHeart,FaFacebook,FaTwitter,FaLinkedin,FaGithub,FaEnvelope} from 'react-icons/fa'

import "../App.css"
import NavBar from "./Navbar"
import Footer from "./Footer"
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom'



export default function Hero() {
 
    return (
        <>
        <NavBar />

<main>
  {/* <!-- Division 1 --> */}
          <div className=" container-fluid text-center  ">
              <h4 className=" textFormatting shadow1" style={{paddingTop: "80px", fontSize: "60px",paddingBottom: "15px"}}>World's Leading Online Resume Builder</h4>
              <h3 style={{paddingBottom: "25px",color: "white", fontSize: "25px"}} className="shadow1">Join 7,000,000 + Professionals And Build Your Resume Online</h3>

          
            <Carousel className="carousel-style">
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={Testasset}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={Testasset}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={Testasset}
                alt="Third slide"
                
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
                <Link to ="/builder">          
              <button type="button" className="btn btn-success btn-lg" id="buildButton">
                    Build    
              </button>
              </Link>
              </div>
              <h3 className=" textFormatting shadow1" style={{fontSize: "40px",paddingBottom: "15px" ,textAlign:"center"}}>Features</h3>

<ul class="cards">
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--fence"></div>
      <div class="card__content">
        <div class="card__title"> <IoIosRocket/> Create a resume that’s worthy of who you are.</div>
        <p class="card__text">Keep up with the latest trends in resume design without having to start from scratch. With new templates being designed every week and having made it that easy to design your own templates and submit them to the community, you’ll never have to copy and edit your friend’s resume again.</p>
        
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--river"></div>
      <div class="card__content">
        <div class="card__title"><RiRefreshLine/>Updating your resume shouldn’t be a chore.</div>
        <p class="card__text">The biggest problem I’ve faced was when I had to update my resume when I learned a new skill or found a new job. The ever-shifting layouts and inconsistency with design over a number of years made it difficult to update your own resume, but Reactive Resume makes it as easy as few clicks.</p>
      </div>
    </div>
  </li>
    <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--river"></div>
      <div class="card__content">
        <div class="card__title"><FaWalking/>Kickstarting your career shouldn’t come at a cost.</div>
        <p class="card__text">There are brilliant alternatives to this app like Novoresume and Zety , but they come at a cost, mainly because of the time the developers and the marketing they had to incur to make the product. This app might not be better than them, but it does cater to people who are just not in a position to pay hundreds of dollars to create a resume to bootstrap their career.</p>
      </div>
    </div>
  </li>

  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--flowers"></div>
      <div class="card__content">
        <div class="card__title">  <FaUserSecret/> Your data is your data, none of our data.</div>
        <p class="card__text">You must be thinking, if you're not paying for the product, then you are the product. Or, at least your data is? Well, this is the exception. Your data is your own, as stated in the ridiculously simple Privacy Policy, I don't do anything with the data, it just exists on a database for the convenient features provided by Reactive Resume.</p>
      </div>
    </div>
  </li>
</ul>
  {/* <!-- Division 2 -->
  <!-- Division 3 --> */}
  <div className="division3">

            {/* <!-- Section: Team v.1 --> */}
    <section className="team-section text-center my-5">

      {/* <!-- Section heading --> */}
      <h1 style={{ paddingTop:"30px", paddingBottom: "25px", fontSize: "3vw" ,color:"white"}} className="display-4  textFormatting">Meet Our Team</h1>
      {/* <!-- Grid row --> */}
      <div className="row">

        {/* <!-- Grid column --> */}
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5" style={{fontFamily: "'Poppins', sans-serif" ,color:"white"}}>
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle z-depth-1"
              alt="Sample avatar" />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
          <p className="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci sed quia non numquam modi tempora eius.</p>
          <ul className="list-unstyled mb-0">
            {/* <!-- Facebook --> */}
            <a a className="p-2 fa-lg ins-ic">
                          <a href="#"><FaFacebook style={{color:"white"}}/></a>
            </a>
            
            {/* <!-- Instagram --> */}
            <a a className="p-2 fa-lg ins-ic">
                          <a href="#"><FaTwitter style={{color:"white"}}/></a>
            </a>
            
            <a a className="p-2 fa-lg ins-ic" >
                         <a href="#"><FaLinkedin style={{color:"white"}}/></a>
            </a>
          </ul>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5" style={{fontFamily: "'Poppins', sans-serif" ,color:"white"}}>
          <div className="avatar mx-auto">
            <img src={Amlan} className="rounded-circle z-depth-1"
              alt="Sample avatar" />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Amlan Roy </h5>
          <p className="grey-text">I'm Studying IT Engineering in DYPCOE. My Interests include building bots, games, softwares and designing. I plan on becoming a Full Stack Developer.</p>
          <ul className="list-unstyled mb-0">
            {/* <!-- Facebook --> */}
            <a a className="p-2 fa-lg ins-ic">
                          <a href="#"><FaFacebook style={{color:"white"}}/></a>
            </a>
            
            {/* <!-- Instagram --> */}
            <a a className="p-2 fa-lg ins-ic">
                          <a href="#"><FaTwitter style={{color:"white"}}/></a>
            </a>
            
            <a a className="p-2 fa-lg ins-ic" >
                         <a href="#"><FaLinkedin style={{color:"white"}}/></a>
            </a>
          </ul>

        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-lg-3 col-md-6 mb-md-0 mb-5" style={{fontFamily: "'Poppins', sans-serif" ,color:"white"}}>
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle z-depth-1"
              alt="Sample avatar" />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Harshit Chari</h5>
          <p className="grey-text" >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
             mollit anim est fugiat nulla id eu laborum.mollit anim est fugiat nulla id eu.</p>
          <ul className="list-unstyled mb-0">
            <a a className="p-2 fa-lg ins-ic">
                          <a href="#"><FaFacebook style={{color:"white"}}/></a>
            </a>
            
            {/* <!-- Instagram --> */}
            <a a className="p-2 fa-lg ins-ic">
                          <a href="#"><FaTwitter style={{color:"white"}}/></a>
            </a>
            
            <a a className="p-2 fa-lg ins-ic" >
                         <a href="#"><FaLinkedin style={{color:"white"}}/></a>
            </a>
          </ul>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-lg-3 col-md-6" style={{fontFamily: "'Poppins', sans-serif" ,color:"white"}}>
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="rounded-circle z-depth-1"
              alt="Sample avatar" />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
          <p className="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur
            totam officia voluptates perferendis voluptatibus aut.</p>
          <ul className="list-unstyled mb-0">
            <a a className="p-2 fa-lg ins-ic">
                          <a href="#"><FaFacebook style={{color:"white"}}/></a>
            </a>
            
            {/* <!-- Instagram --> */}
            <a a className="p-2 fa-lg ins-ic">
                          <a href="#"><FaTwitter style={{color:"white"}}/></a>
            </a>
            
            <a a className="p-2 fa-lg ins-ic" >
                         <a href="#"><FaLinkedin style={{color:"white"}}/></a>
            </a>
          </ul>
        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

    </section>

  </div>
  {/* <!-- Section: Team v.1 -->
  <!-- Division 3 --> */}

      </main>
    <Footer />
    </>

    )
}
