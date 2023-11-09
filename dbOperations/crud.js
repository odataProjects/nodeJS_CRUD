const connection = require('./connect');

const create = async (data) => {
    const [rows, fields] = connection.query('INSERT INTO Employee (nom_employee, salaire_employee) VALUES (?,?)', [data.name, data.salaire]);
    return rows.insertId;
};

const read = async () => {
    const [rows, fields] = connection.query('SELECT * FROM Employee');
    return rows;
};

const update = async (id, data) => {
    const [rows, fields] = connection.query('UPDATE Employee SET nom_employee = ?, salaire_employee = ? WHERE id_employee = ?', [data.newName, data.newSalaire, id]);
    return rows.affectedRows > 0;
};

const remove = async (id) => {
    const [rows, fields] = connection.query('DELETE FROM Employee WHERE id_employee = ?', [id]);
    return rows.affectedRows > 0;
};

module.exports = { create, read, update, remove };
