create table comentarios(
id int unsigned primary key auto_increment,
idPost int unsigned,
idUsuario int unsigned,
comentario text,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

foreign key (idPost) references products(id),
foreign key (idUsuario) references clientes(id));

insert into comentarios (id, idPost, idUsuario, comentario)
values (default, default, default, 'excelente producto');

insert into comentarios (id, idPost, idUsuario, comentario)
values (default, default, default, 'excelente producto');

insert into comentarios (id, idPost, idUsuario, comentario)
values (default, default, default, 'excelente producto');

insert into comentarios (id, idPost, idUsuario, comentario)
values (default, default, default, 'excelente producto');
