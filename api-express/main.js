const { Sequelize, DataTypes } = require("sequelize");
// Option 1: Passing a connection URI
const sequelize = new Sequelize("sqlite::memory:");

const mahasiswa = sequelize.define(
  "mahasiswa",
  {
    nim: DataTypes.STRING,
    nama: DataTypes.STRING,
    jurusan: DataTypes.STRING,
  },
  {
    // Other model options go here
  }
);

sequelize.sync();

const express = require("express");
const app = express();
const port = 3001;

app.get("/mahasiswa", async (req, res) => {
  const data = await mahasiswa.findAll();
  res.send({ result: data });
});
app.post("/mahasiswa", async (req, res) => {
  const data = await mahasiswa.findCreateFind(req.body);
  res.send({ result: data });
});
app.put("/mahasiswa", async (req, res) => {
  const data = await mahasiswa.findAll();
  res.send({ result: data });
});
app.delete("/mahasiswa", async (req, res) => {
  const data = await mahasiswa.findAll();
  res.send({ result: data });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
