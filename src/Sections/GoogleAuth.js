import React, { useState, useContext } from 'react'
import firebase from "firebase/app";
import {Button} from "reactstrap"
import {FaGoogle} from "react-icons/fa"
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export default function GoogleAuth() {
  const context = useContext(UserContext);
  var GoogleProvider = new firebase.auth.GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const GoogleSignin = () => {
    firebase
      .auth()
      .signInWithPopup(GoogleProvider)
      .then(res => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch(error => {
        console.log(error);
        toast(error.message, {
          type: "error"
        });
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    GoogleSignin();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

    return (
      <div className="login-buttons">
        <Button type="submit" block color="warning" onClick={handleSubmit}>
        <span> <FaGoogle style={{paddingBottom: "2px"}}/> Continue with Google</span>
       </Button>
      </div>

    )
}
