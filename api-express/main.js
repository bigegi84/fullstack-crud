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

const main = async () => {
  await sequelize.sync(); // ini buat dari kodingan ke db
  await mahasiswa.create({ nim: "1", nama: "budi", jurusan: "komputer" });
  await mahasiswa.create({ nim: "2", nama: "bapak budi", jurusan: "mesin" });

  const express = require("express");
  const cors = require("cors");
  const app = express();
  app.use(express.json());
  app.use(cors());
  const port = 3001;

  // create
  app.post("/mahasiswa", async (req, res) => {
    const data = await mahasiswa.create(req.body);
    res.send({ result: data });
  });

  // read
  app.get("/mahasiswa", async (req, res) => {
    const data = await mahasiswa.findAll();
    res.send({ result: data });
  });

  // update
  app.put("/mahasiswa", async (req, res) => {
    const data = await mahasiswa.findAll();
    res.send({ result: data });
  });

  // delete
  app.delete("/mahasiswa", async (req, res) => {
    const data = await mahasiswa.destroy(req.query.id);
    res.send({ result: data });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main();
