import React, { useState, useEffect } from "react";
export default () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 7]);
  const [input, setInput] = useState("");
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
          // console.log(e);
          console.log("masuk onchange " + e.target.value);
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const newData = [...data];
          newData.push(input);
          setData(newData);
          setInput("");
        }}
      >
        simpan
      </button>
      {data.map((it, i) => {
        return (
          <tr>
            <td>{it}</td>
            <td>
              <button
                onChange={() => {
                  const newData = [...data];
                  newData.splice(i, 1);
                  setData(newData);
                  setInput("");
                }}
              >
                hapus
              </button>
            </td>
          </tr>
        );
      })}
    </div>
  );
};
