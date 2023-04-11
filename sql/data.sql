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

create table products(
id int unsigned primary key auto_increment,
user_id int unsigned, 
nombreProducto varchar(200) not null,
descripcion varchar(200)not null,
foreign key (user_id) references usuarios(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null
);

insert into products(id, nombreProducto, descripcion)
values(default, "Manta Norwegian", "Manta de 50x70"),
(default, "Termo", "Termo para mate"),
(default, "Almohadon", "Almohadon"),
(default, "Mesa", "Mesa de comedor"),
(default, "Silla", "Silla de comedor"),
(default,"Sillon", "Sillon para living"),
(default, "Cama", "Cama de 2 plazas"),
(default, "Mesa ratona", "Mesa ratona para lampara"),
(default, "Lampara", "Lampara de mesa"),
(default, "Mantel", "Mantel para mesa de comedor");



create table comentarios(
id int unsigned primary key auto_increment,
idPost int unsigned,
idUsuario int unsigned,
comentario text,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP null,

foreign key (idPost) references products(id),
foreign key (idUsuario) references usuarios(id));

insert into comentarios (id, idPost, idUsuario, comentario)
values (default, default, default, 'excelente producto');

insert into comentarios (id, idPost, idUsuario, comentario)
values (default, default, default, 'excelente producto');

insert into comentarios (id, idPost, idUsuario, comentario)
values (default, default, default, 'excelente producto');

insert into comentarios (id, idPost, idUsuario, comentario)
values (default, default, default, 'excelente producto');