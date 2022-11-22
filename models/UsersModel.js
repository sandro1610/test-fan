import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {Datatypes} = Sequelize;

const Users = db.define('Users', {
    nama: {
        type: 'varchar'
    },email: {
        type: 'varchar'
    },password: {
        type: 'varchar'
    },npp: {
        type: 'varchar'
    },npp_supervisor: {
        type: 'varchar'
    }
})


export default Users;