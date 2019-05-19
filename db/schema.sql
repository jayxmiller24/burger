CREATE database Burgers_db;
use burgers_db;
create table burgers(
    id  Integer not null AUTO_INCREMENT,
    burger_name VARCHAR(200) not null,
    devoured Boolean,
    primary key (id)
);