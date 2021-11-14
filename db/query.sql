/* -- View all departments --
SELECT * FROM department;

-- View all roles --
SELECT role.id, role.title, department.name, role.salary 
FROM role
JOIN department ON role.department_id = department.id
ORDER BY role.id;
 
-- View all employees --

SELECT 
employee.id, 
employee.first_name, 
employee.last_name,
role.title, 
department.name, 
role.salary, 
CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employee
JOIN role 
ON employee.role_id = role.id
LEFT OUTER JOIN employee AS manager
ON manager.role_id = employee.manager_id
JOIN department
ON department.id = role.department_id
ORDER BY employee.id;

-- Add a new role --


INSERT INTO role(title,salary,department_id)
SELECT id from department
WHERE 
VALUES('Customer Service',50000,'Sales')
WHERE  */


SELECT id from department where name = "Sales";

UPDATE employee set role_id = '' WHERE id= ''


