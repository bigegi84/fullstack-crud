import React, { useState, useEffect } from "react";
export default () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 7]);
  const [input, setInput] = useState(null);
  useEffect(() => {
    console.log("This will run whenever the App component renders!");
  }, []);
  useEffect(() => {
    console.log("This will also run whenever the App component renders!");
  }, []);
  const onSimpan = () => {};
  return (
    <div>
      <input
        type={"text"}
        value={input}
        onChange={(e) => {
          console.log("masuk onchange");
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const newData = [...data];
          newData.push(input);
          setData(newData);
          setInput(null);
        }}
      >
        simpan
      </button>
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
