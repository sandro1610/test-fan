import { Sequelize } from "sequelize"

const db = new Sequelize('absensi', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
})

export default db;