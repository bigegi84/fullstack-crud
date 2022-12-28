import React, { useState, useEffect } from "react";
import axios from "axios";
export default () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const getData = async () => {
    const res = await axios.get("localhost:3001/mahasiswa");
    console.log(res);
    setData(res.data.result);
  };
  useEffect(() => {
    console.log("This will run whenever the App component renders!");
    getData();
  }, [data]);
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
            <td>{it.nim}</td>
            <td>{it.nama}</td>
            <td>{it.jurusan}</td>
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
