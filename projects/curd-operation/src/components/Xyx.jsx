import axios from "axios";
import React, { useEffect } from "react";

function Xyz() {
  const [apiData, setApiData] = useState([]);
  function getData() {
    axios
      .get("https://6a8512da9c451dc67a633d87.mockapi.io/Crud")
      .then((response) => setApiData(response.data));
  }

  useEffect(() => getData(), []);
  return (
    <>
      <table>
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
          {apiData.map((result) => {
            return (
              <tr>
                <td>{result.id}</td>
                <td>{result.e_name}</td>
                <td>{result.e_age}</td>
                <td>{result.e_email}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Xyz;