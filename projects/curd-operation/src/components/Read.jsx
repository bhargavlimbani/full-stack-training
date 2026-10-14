import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://6a8512da9c451dc67a633d87.mockapi.io/Crud")
      .then((response) => {
        setApiData(response.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to='/create'>
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {apiData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.s_name}</td>
                    <td>{item.s_age}</td>
                    <td>{item.s_email}</td>
                    <td>
                      <button className="btn btn-primary">Edit</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;