import React, { useEffect } from "react";
import "./listing.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const EpListing = () => {
  const [empdata, empdatachange] = useState(null);
  useEffect(() => {
    fetch("http://localhost:7000/employment")
      .then((res) => res.json())
      .then((resp) => empdatachange(resp))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="emp-listing">
      <div className="list-header">
        <h1>Employment Listing</h1>
      </div>
      <div className="divbtn">
        <Link to="components/create" className="btn ">
          Add New (+)
        </Link>
      </div>
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {empdata &&
              empdata.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  {/* <td>
                    <a
                      onClick={() => {
                        LoadEdit(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        Removefunction(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Remove
                    </a>
                    <a
                      onClick={() => {
                        LoadDetail(item.id);
                      }}
                      className="btn btn-primary"
                    >
                      Details
                    </a>
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpListing;
