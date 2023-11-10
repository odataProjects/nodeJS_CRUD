const request = require('supertest');
const conn = require('../dbOperations/connect')
const app = require('../app');


let server; // Define a variable to hold the server instance

beforeAll(done => {
    server = app.listen(4000, done); // Start the server on port 4000
});

afterAll(done => {
    server.close(() => {
        conn.end(() => {
            done();
        });
    });
});

describe('Employee Management System', () => {
    let insertId;

    it('should insert a new employee', async () => {
        request(app)
            .post('/inEmployee')
            .send({ name: 'John Doe', salaire: 5000 })
            .then((response) => {
                expect(response.status).toBe(200);
                expect(response.text).toBe("Employee's records inserted successfully");

                conn.query('SELECT LAST_INSERT_ID() as insertId', (err, results) => {
                    if (err) {
                        console.error('Error executing query:', err);
                        done(err);
                        return;
                    }

                    insertId = results[0].insertId;
                    // Now you have the insertId available for further use
                    return
                });
            })
            .catch((error) => done(error));
    });

    it('should list employees', async () => {
        const response = await request(app).get('/listEmployees');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should get an employee by ID', async () => {
        const response = await request(app).get('/getEmployee/:' + insertId);
        expect(response.status).toBe(200);
        if (response.body.length > 0) {
            expect(response.body[0]).toHaveProperty('id_employee');
        } else {
            expect(response.body).toHaveLength(0); // No employees found
        }
    });

    it('should modify an employee', async () => {
        // Assume you have an existing employee with ID 1
        const response = await request(app)
            .post('/modEmployee')
            .send({ newName: 'Jane Doe', newSalaire: 55000, id: insertId });

        expect(response.status).toBe(200);
        expect(response.text).toBe("Employee's records modified successfully");
    });

    it('should delete an employee', async () => {
        // Assume you have an existing employee with ID 1
        const response = await request(app).delete('/delEmployee/' + insertId);
        expect(response.status).toBe(200);
        expect(response.text).toBe("Employee's records deleted successfully");
    });

    it('should get maximum and minimum salary', async () => {
        const response = await request(app).get('/getSalaire');
        expect(response.status).toBe(200);
        expect(response.body[0]).toHaveProperty('max');
        expect(response.body[0]).toHaveProperty('min');
    });
});
