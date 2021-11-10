/* -- View all departments --
SELECT * FROM department;

-- View all roles --
SELECT role.id, role.title, department.name, role.salary 
FROM role
JOIN department ON role.department_id = department.id
ORDER BY role.id;
 */
-- View all employees --

SELECT 
employee.id, 
employee.first_name, 
employee.last_name,
role.title, 
department.name, 
role.salary, 
CONCAT(manager.first_name, ' ', manager.last_name) AS manager, 
manager.id AS ManagerId
FROM employee
JOIN role 
ON employee.role_id = role.id
LEFT OUTER JOIN employee AS manager
ON manager.role_id = employee.manager_id
JOIN department
ON department.id = role.department_id;



