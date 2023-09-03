create table users(
    id int not null auto_increment,
    name varchar(255) not null,
    salary decimal(10,2) not null,
    primary key(id)
) engine=InnoDB