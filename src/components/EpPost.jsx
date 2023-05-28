import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EpPost = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:7000/employment/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {empdata && (
        <h1>
          <h2>
            The Employee name is : <b>{empdata.name}</b> ({empdata.id})
          </h2>
          <h3>Contact Details</h3>
          <h5>Email is : {empdata.email}</h5>
          <h5>Phone is : {empdata.phone}</h5>
          <Link className="btn btn-danger" to="/">
            Back to Listing
          </Link>
        </h1>
      )}
    </div>
  );
};

export default EpPost;
