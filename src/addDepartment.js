const connect = require("../config/connection");

/* async function addDepartment(department_name) {
  try {
    console.log(department_name);
    const connection = await connect();
    console.log(connection);
    const result = await connection.query(
      "INSERT INTO department SET ?",
      { name: `${department_name}` },
      function (err, res) {
        if (err) {
          console.log(err);
        }
        console.log(`\n Successfully added department!`);
        return res;
      }
    );
    console.log(result);
  } catch (e) {
    console.log(`\n Error adding department`);
  }
} */

async function addDepartment(department_name) {
  try {
    console.log(department_name);
    const connection = await connect();
   const result = await connection.execute(
         `INSERT INTO department (name) VALUES (?);`,
      [department_name],
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`\n Successfully added department!`);
        return res;
      });console.log(result);
    
  } catch (e) {
    console.log(e);

    console.log(`\n Error adding department`);
  }
}

module.exports = { addDepartment };
