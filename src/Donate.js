import React, { useState } from "react";
import "./Donate.css";
import { Link } from "react-router-dom";
import { db } from "./firebase.js";
import { useStateValue } from "./StateProvider";

function Donate() {
  const [name, setName] = useState();
  const [doe, setDoe] = useState();
  const [dosage, setDosage] = useState();
  const [address, setAddress] = useState();
  const [{ user }] = useStateValue();

  const sendDonation = (e) => {
    // e.preventDefault();
    db.collection("user")
      .doc(user?.email)
      .collection("donation")
      .doc(user?.email)
      .set({
        name: name,
        doi: doe,
        dosage: dosage,
        address: address,
      });
    setName("");
    setDoe("");
    setDosage("");
    setAddress("");
  };

  return (
    <div class="donation">
      <div class="donation__container">
        <h1>
          <strong> DONATE</strong>
        </h1>
        <h5>Name of Medicine</h5>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h5>Date of Expiry (DD/MM/YYYY)</h5>
        <input
          type="text"
          value={doe}
          onChange={(e) => setDoe(e.target.value)}
        />

        <h5>Dosage</h5>
        <input
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />

        <h5>Pickup address</h5>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          type="submit"
          onClick={sendDonation}
          className="donation__button"
        >
          <Link className = "link" to="/ThanksD">
            <strong>DONATE</strong>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Donate;
