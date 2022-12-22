import React, { useState } from "react";
export default () => {
  const [data, setData] = useState([1,2,3,4,5,6,7,7]);
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
