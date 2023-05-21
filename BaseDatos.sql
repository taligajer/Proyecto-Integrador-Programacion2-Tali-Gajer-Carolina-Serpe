create database users;
use users;
create table user(
id int unsigned primary key auto_increment,
email varchar(200) unique not null, 
password varchar(200) not null,
fotoPerfil varchar(200) not null,
dni char(100),
fechaNacimiento date not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP);

insert into user(id, email, password, fotoPerfil, dni, fechaNacimiento)
values(default, "manuel@gamil.com", "hola123", "/images/users/default_pfp.png", "45005986", "1/03/2001");

insert into user(id, email, password, fotoPerfil,dni, fechaNacimiento)
values(default, "gajertali@gmail.com", "hola", "/images/users/default_pfp.png", "47009876", "02/04/2003");

insert into user(id, email, password, fotoPerfil,dni, fechaNacimiento)
values(default, "caroserpe@gmail.com", "caro123", "/images/users/default_pfp.png", "458970654", "05/12/2005");

insert into user(id, email, password, fotoPerfil,dni, fechaNacimiento)
values(default, "aguscagnoli@gmail.com", "agus123", "/images/users/default_pfp.png", "48004567", "24/09/2007");

insert into user(id, email, password, fotoPerfil,dni, fechaNacimiento)
values(default, "lucia@gmail.com", "luli123", "/images/users/default_pfp.png", "49876545", "30/07/2002");