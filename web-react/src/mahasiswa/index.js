import React, { useState, useEffect } from "react";
import axios from "axios";
export default () => {
  const [data, setData] = useState([]);
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const createData = async (data) => {
    const res = await axios.post("http://localhost:3001/mahasiswa", data);
    console.log(res);
    readData();
  };
  const readData = async () => {
    const res = await axios.get("http://localhost:3001/mahasiswa");
    console.log(res);
    setData(res.data.result);
  };
  const updateData = async (data) => {
    const res = await axios.post("http://localhost:3001/mahasiswa", data);
    console.log(res);
    setData(res.data.result);
  };
  const deleteData = async (nim) => {
    const res = await axios.delete("http://localhost:3001/mahasiswa/" + nim);
    console.log(res);
    await readData();
  };

  useEffect(() => {
    console.log("This will run whenever the App component renders!");
    readData();
  }, []);
  useEffect(() => {
    console.log("This will also run whenever the App component renders!");
  }, []);
  const onSimpan = () => {};
  return (
    <div>
      <input
        type={"text"}
        placeholder="nim"
        value={nim}
        onInput={(e) => setNim(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="nama"
        value={nama}
        onInput={(e) => setNama(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="jurusan"
        value={jurusan}
        onInput={(e) => setJurusan(e.target.value)}
      />
      <button
        onClick={async () => {
          const data = { nim, nama, jurusan };
          await createData(data);
          setNim("");
          setNama("");
          setJurusan("");
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
                onClick={async () => {
                  await deleteData(it.nim);
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
