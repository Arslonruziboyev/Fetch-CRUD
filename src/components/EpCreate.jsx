import React from "react";
import { useState } from "react";
import "./listing.css";
import { Link, useNavigate } from "react-router-dom";

const EpCreate = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const empdata = { name, email, phone, active };

    fetch("http://localhost:7000/employment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="emp-listing">
      <div className="list-header">
        <h1>Add New One</h1>
      </div>
      <div className="list-form">
        <form onSubmit={handleSubmit}>
          <label>ID</label>
          <input
            value={id}
            disabled="disabled"
            className="form-control"
          ></input>{" "}
          <label>Name</label>
          <input
            required
            value={name}
            onMouseDown={(e) => valchange(true)}
            onChange={(e) => namechange(e.target.value)}
            className="form-control"
          ></input>
          {name.length == 0 && validation && (
            <span className="text-danger">Enter the name</span>
          )}
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => emailchange(e.target.value)}
            className="form-control"
          ></input>
          <label>Phone</label>
          <input
            value={phone}
            onChange={(e) => phonechange(e.target.value)}
            className="form-control"
          ></input>
          <div className="checkbox">
            <input
              checked={active}
              onChange={(e) => activechange(e.target.checked)}
              type="checkbox"
              className="form-check-input"
            ></input>
            <label className="form-check-label">Is Active</label>
          </div>
          <div className="btns">
            <button className="btn" type="submit">
              Save
            </button>
            <Link to="/" className="btn-back">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EpCreate;
