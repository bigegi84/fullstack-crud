import React, { useState, useEffect } from "react";
export default () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 7]);
  useEffect(() => {
    console.log("This will run whenever the App component renders!");
  }, []);
  useEffect(() => {
    console.log("This will also run whenever the App component renders!");
  }, []);
  return (
    <div>
      {data.map((it) => {
        return (
          <tr>
            <td>{it}</td>
          </tr>
        );
      })}
    </div>
  );
};
