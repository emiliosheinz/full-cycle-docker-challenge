const express = require('express')
const mysql = require('mysql2')
const { faker } = require('@faker-js/faker')

const db = mysql.createConnection({
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'fc-docker-challenge',
})

db.connect(err => {
  if (err) throw err
  const createPeopleTable =
    'CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))'
  db.query(createPeopleTable, err => {
    if (err) throw err
    console.log('people Table created')
  })
})

const app = express()
const port = 3000

app.get('/', (_, res) => {
  const randomPersonFullName = faker.person.fullName()
  const insertPerson = `INSERT INTO people (name) VALUES ('${randomPersonFullName}')`
  db.query(insertPerson, err => {
    if (err) throw err
    console.log(`${randomPersonFullName} inserted`)
  })
  const selectPeople = 'SELECT * FROM people'
  db.query(selectPeople, (err, result) => {
    if (err) throw err
    const people = result.map(person => `<li>${person.name}</li>`).join('')
    res.send(`<h1>Full Cycle Rocks!</h1><ul>${people}</ul>`)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
