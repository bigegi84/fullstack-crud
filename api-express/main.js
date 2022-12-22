const { Sequelize } = require("sequelize");

// Option 1: Passing a connection URI
const sequelize = new Sequelize("sqlite::memory:");

const Mahasiswa = sequelize.define(
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
