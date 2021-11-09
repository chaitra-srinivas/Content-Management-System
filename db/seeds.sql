INSERT INTO department (id,name)
VALUES  (1,"Engineering"),
        (2,"Finance"),
        (3,"Legal"),
        (4,"Sales");


INSERT INTO role (id,department_id, title, salary)
VALUES  (1,1,"Lead Engineer", 150000),
        (2,1,"Sofware Engineer", 120000),
        (3,2,"Account Manager",160000),
        (4,2,"Accountant",125000),
        (5,3,"Legal Team Lead",250000),
        (6,3,"Lawyer",190000),
        (7,4,"Sales Lead",100000),
        (8,4,"Salesperson",80000);


INSERT INTO employee (id, first_name,last_name,role_id,manager_id)
VALUES  (1,"Lina","Jacob", 3,null),
        (2,"Tina","Johnson",4,3),
        (3,"Mike","Chang",1,null),
        (4,"Rocco","Triffet",2,1),
        (5,"Angela","Merkel",5,null),
        (6,"Borris","Johnson",6,5),
        (7,"Scott","Morrison",7,null),
        (8,"Steve","Meyers",8,7);
