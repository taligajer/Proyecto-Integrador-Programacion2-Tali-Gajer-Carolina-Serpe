drop schema catalogo;
create schema catalogo;

use catalogo;
create table usuarios(
id int unsigned primary key auto_increment,
email varchar(150) not null,
contrasenia varchar(500) not null,
fotoPerfil varchar(200) not null,
fecha date not null,
dni int unsigned not null,
createAt timestamp default current_timestamp,
updateAt timestamp default current_timestamp on update current_timestamp,
deleteAt timestamp null
);

insert into usuarios(id, email, contrasenia, fotoPerfil, fecha, dni)
values(default, "manuel@gmail.com", "hola123", "/images/users/default_pfp.png", "2001-03-01", "45005986");

insert into catalogo(id, email, contrasenia, fotoPerfil, fecha, dni)
values(default, "gajertali@gmail.com", "hola", "/images/users/default_pfp.png", "02/04/2003", "47009876");

insert into catalogo(id, email, contrasenia, fotoPerfil, fecha, dni)
values(default, "caserpe@gmail.com", "caro123", "/images/users/default_pfp.png", "05/12/2005", "458970654");

insert into catalogo(id, email, contrasenia, fotoPerfil, fecha, dni)
values(default, "aguscagnoli@gmail.com", "agus123", "/images/users/default_pfp.png", "24/09/2007", "48004567");

insert into catalogo(id, email, contrasenia, fotoPerfil, fecha, dni)
values(default, "lucia@gmail.com", "luli123", "/images/users/default_pfp.png", "30/07/2002", "49876545");