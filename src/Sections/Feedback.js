import React from 'react'
import NavBar from "./Navbar"
import Footer from "./Footer"

export default function Feedback() {
    return (
        <>
        <NavBar />
        <form className="text-center border border-light p-5" action="#!" >

    <p className="h1 mb-4" style={{paddingBottom: "50px" , paddingTop: "50px" }}>Contact us</p>

    {/* <!-- Name --> */}
    <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />
    <br />

    {/* <!-- Email --> */}
    <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />
    <br />
    {/* <!-- Subject --> */}
    <label>Subject</label>
    <br /> <br />   
    <select className="browser-default custom-select mb-4">
        <option value="" disabled>Choose option</option>
        <option value="1" selected>Feedback</option>
        <option value="2">Report a bug</option>
        <option value="3">Feature request</option>
    </select>
    <br /> 
    {/* <!-- Message --> */}
    <div className="form-group">
        <br />   
        <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
    </div>
    <br />
    {/* <!-- Copy --> */}
    <div className="custom-control custom-checkbox mb-4">
        <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
        <label className="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
    </div>
    <br />
    {/* <!-- Send button --> */}
    <button className="btn btn-info btn-block" type="submit">Send</button>
        </form>
        <Footer />
      </>
    )
}
