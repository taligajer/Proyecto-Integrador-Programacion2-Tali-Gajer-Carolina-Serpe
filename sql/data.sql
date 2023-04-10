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
values(default, "manuel@gmail.com", "hola123", "/images/users/default_pfp.png", "2001-03-01", "45005986"),
(default, "gajertali@gmail.com", "hola", "/images/users/default_pfp.png", "2003-04-02", "47009876"),
(default, "caserpe@gmail.com", "caro123", "/images/users/default_pfp.png", "2005-12-05", "458970654"),
(default, "aguscagnoli@gmail.com", "agus123", "/images/users/default_pfp.png", "2007-09-24", "48004567"),
(default, "lucia@gmail.com", "luli123", "/images/users/default_pfp.png", "2002-07-30", "49876545");
