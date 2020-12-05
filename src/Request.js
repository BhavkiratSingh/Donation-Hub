import React, { useState } from "react";
import "./Request.css";
import { db } from "./firebase.js";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
// import firebase from "firebase";

function Request() {
  const [name, setName] = useState();
  const [dosage, setDosage] = useState();
  const [{ user }] = useStateValue();

  const sendRequest = (e) => {
    // e.preventDefault();
    // firebase.database().ref(user?.email.split("@")[0]).push().set({
    //   name: name,
    //   dosage: dosage,
    // });
    db.collection("user")
      .doc(user?.email)
      .collection("request")
      .doc(user?.email)
      .set({
        name: name,
        dosage: dosage,
      });
    setName("");
    setDosage("");
    
  };
  return (
    <div class="request">
      <div class="request__container">
        <h1>Request</h1>
        <h5>Name of Medicine</h5>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h5>Dosage</h5>
        <input
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />
        
        <button type="submit" onClick={sendRequest} className="request__button">
          <Link className = "link" to="/ThanksR">
          <strong>REQUEST</strong>
        </Link>
        </button>
      </div>
    </div>
  );
}

export default Request;
