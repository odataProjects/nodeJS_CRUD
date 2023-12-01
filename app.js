require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const conn = require('./dbOperations/connect')

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send({ msg: "Welcome to nodeJenkins API latest version 2.1" })
})

app.post('/inEmployee', (req, res) => {
    const { name, salaire } = req.body;

    conn.query('INSERT INTO Employee (nom_employee, salaire_employee) VALUES (?,?)', [name, salaire], (err, results) => {
        if (err) {
            //console.error('Error executing query:', err);
            return res.send('Error inserting employee');
        }

        res.send("Employee's records inserted successfully");
    });
});

app.get('/listEmployees', (req, res) => {
    conn.query('SELECT * FROM Employee', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        res.send(results)
    });
});

app.get('/getEmployee/:id', (req, res) => {
    const id = req.params.id;
    conn.query('SELECT * FROM Employee where id_employee = ?', [id], (err, results) => {
        if (err) {
            //console.error('Error executing query:', err);
            return;
        }
        res.send(results)
    });
});

app.post('/modEmployee', (req, res) => {
    const { newName, newSalaire, id } = req.body;

    conn.query('UPDATE Employee SET nom_employee = ?, salaire_employee = ? WHERE id_employee = ?', [newName, newSalaire, id], (err, results) => {
        if (err) {
            //console.error('Error executing query:', err);
            return res.send('Error updating employee');
        }

        res.send("Employee's records modified successfully");
    });

});

app.delete('/delEmployee/:id', (req, res) => {
    const employeeId = req.params.id;

    conn.query('DELETE FROM Employee WHERE id_employee = ?', [employeeId], (err, results) => {
        if (err) {
            //console.error('Error executing query:', err);
            return res.status(500).send('Error deleting employee');
        }

        res.send("Employee's records deleted successfully");
    });
});



/*app.get('/getSalaire', (req, res) => {
    conn.query('SELECT MAX(salaire_employee) as max, MIN(salaire_employee) as min FROM Employee', (err, results) => {
        if (err) {
            //console.error('Error executing query:', err);
            return;
        }
        res.send(results)
    });
});*/

module.exports = app;