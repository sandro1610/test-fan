import db from "../config/Database.js";
import Users from "./UsersModel.js"

const Espresences = db.define('Espresences', {
    id_user: {
        type: 'integer'
    },type: {
        type: 'varchar'
    },is_approve: {
        type: 'boolean',
        defaultValue: true
    },waktu: {
        type: 'timestamp',
    }
})


Espresences.belongsTo(Users, {foreignKey: 'id_user'});
Users.hasMany(Espresences, {foreignKey: 'id_user'});

export default Espresences;