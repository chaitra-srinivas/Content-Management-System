INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");


INSERT INTO role (department_id, title, salary)
VALUES  (1,"Lead Engineer", 150000),
        (1,"Sofware Engineer", 120000),
        (2,"Account Manager",160000),
        (2,"Accountant",125000),
        (3,"Legal Team Lead",250000),
        (3,"Lawyer",190000),
        (4,"Sales Lead",100000),
        (4,"Salesperson",80000);


INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES  ("Lina","Jacob", 3,null),
        ("Tina","Johnson",4,3),
        ("Mike","Chang",1,null),
        ("Rocco","Triffet",2,1),
        ("Angela","Merkel",5,null),
        ("Borris","Johnson",6,5),
        ("Scott","Morrison",7,null),
        ("Steve","Meyers",8,7);

