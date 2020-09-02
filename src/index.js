require("dotenv").config({
  path: "./.env",
});

const Pool = require(`pg`).Pool;
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

function addNewVisitor(name, age, date, time, assistant, comments) {
  pool.query(
    `
            INSERT INTO 
                VISITORS(firstname, age, dateofvisit, timeofvisit, personassisted, comments) 
            VALUES('${name}','${age}','${date}','${time}','${assistant}','${comments}')`,
    (err, res) => {
      if (err) {
        throw err;
      }
      console.log(`Successfully added` + res.rows);
      pool.end();
    }
  );
}

function listAllVisitors() {
  pool.query(
    `
            SELECT firstname, visitorId FROM VISITORS`,
    (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res.rows);
      pool.end();
    }
  );
}
listAllVisitors()

function deleteAVisitor(visitorID) {
  pool.query(
    `
        DELETE FROM VISITORS WHERE VisitorID = ${visitorID}`,
    (err) => {
      if (err) {
        throw err;
      }
      console.log(`Visitor ${visitorID} deleted`);
      pool.end();
    }
  );
}

function updateAVisitor(name, visitorID) {
  pool.query(
    `
        UPDATE VISITORS
        SET firstname = '${name}'
        WHERE
            VisitorID = ${visitorID}
   `,
    (err) => {
      if (err) {
        throw err;
      }
      console.log(`Updated successful`);
      pool.end();
    }
  );
}

function listOneVisitor(visitorID) {
  pool.query(
    `
            SELECT * FROM VISITORS WHERE visitorID = ${visitorID}`,
    (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res.rows);
      pool.end();
    }
  );
}

function deleteAllVisitor() {
  pool.query(
    `
        DELETE FROM VISITORS`,
    (err) => {
      if (err) {
        throw err;
      }
      console.log(`Visitors successfully deleted`);
      pool.end();
    }
  );
}

module.exports = {
  addNewVisitor,
  listAllVisitors,
  deleteAVisitor,
  updateAVisitor,
  listOneVisitor,
  deleteAllVisitor,
};
