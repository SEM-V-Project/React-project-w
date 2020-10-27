import React from 'react'
import {Button} from "reactstrap"
import "../App.css"
import Footer from "./Footer";
import NavBar from "./Navbar";


export default function Support() {
    return (
        <>
        <NavBar />
        <div className="container con1" style={{paddingTop: "90px" }}>
  <h4><b>1) How to create a resume on Resumely</b>?</h4>
  <p>
     To create your own resume follow these steps: <br />
      1) Click on <b>"Resume"</b> tab in the top menu. <br />
      2) Browse through our various resume templates. <br />
      3) Choose a template suitable for your skills. <br />
      4) Enter your details accordingly. <br />
      5) Customize your resume if needed. <br />
      6) Click on <b>"Download"</b> button. <br />
      7) You will be asked to login or sign up. <br />
      8) <b>Login</b> or <b>Sign up</b> accordingly and your file will be downloaded. <br />
  </p><br />

  <h4><b>2) Do we charge any fee for creating resume?</b></h4>
  <p>
    <b>No</b>, we don't charge any fee or money to create your resume. Although you do <br />
    require to create an account through your email-id. Other than this, there are <br />
    no other requirements to create a resume.
  </p><br />

  <h4><b>3) Do we check validity of resume?</b></h4>
  <p>
    <b>No,</b> we don't check any user background. We are just providing a platform to <br />
    build an outstanding resume to each and every person irrespective of the caste, creed, <br />
    religion, color or nationality. We don't check any background knowledge of the user nor do we <br />
    test their skills. We are not responsible for any inappropriate information, disclosure of <br />
    sensitive information and we strictly prohibit it.
  </p>

  <h4><b>4) Can I get more resume templates?</b></h4>
  <p>
    We are updating our resume builder website every week. We add new templates every week and <br />
    we also analyze your resume and provide you feedback. If you didn't like our current templates <br />
    then please visit after 6-7 days. We will be adding new templates and new features to make your <br />
    resume catchy and help you to stand out from other applicants. Please bear with us for the time being.
  </p>

  <h3 style={{textAlign: "center"}}>Still your query isn't resolved.... Then please contact us 
  </h3>
  <Button type="button" block color="primary" style={{marginBottom: "15px"}}>Contact Us</Button>

</div>
<Footer />
     </>
    )
}
