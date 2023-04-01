const  user = {
    email: "manuel@gamil.com",
    usuario: "ManuelGomez",
    fechaNacimiento: 01/03/2001,
    numeroTel: 11-4859-9234, 
    fotoPerfil: "./data/default_pfp.png",
    
}
// ver que onda si esto funciona o no --> tema de la imagen y como vincularla para que aparezca en las otras paginas que pide la consigna 
// faltan poner 5 productos mas y la parte de comentarios 
const products = [{imagen: "./data/manta", nombreProducto: "Manta Norwegian", descripcion: "Manta de 50x70 cm", fechaCarga: 04/03/2023,}, {imagen:
"./data/termo.jpeg", nombreProducto: "Termo", descripcion: "Termo", fechaCarga: 23/09/2023}, {imagen: "./data/almohadon.jpeg",
nombreProducto: "Almohadon", descripcion: "Almohadon", fechaCarga: 25/05/2023}, {imagen: "./data/mesa.jpeg", nombreProducto: "Mesa",
descripcion: "Mesa de comedor", fechaCarga: 12/06/2023}, {imagen: "./data/silla.jpeg", nombreProducto: "Silla", descripcion: "Silla de comedor",
fechaCarga: 09/06/2023}, {imagen: "./data/sillon.jpg", nombreProducto: "Sillon", descripcion: "Sillon para living",
fechaCarga: 08/09/2023}, {imagen: "./data/Cama.jpg", nombreProducto: "Cama", descripcion: "Cama de 2 plazas",
fechaCarga: 28/02/2022}, {imagen: "./data/mesaratona.jpg", nombreProducto: "Mesa ratona", descripcion: "Mesa ratona para lampara",
fechaCarga: 05/06/2023}, {imagen: "./data/Lampara.jpg", nombreProducto: "Lampara", descripcion: "Lampara de mesa",
fechaCarga: 06/07/2023}, {imagen: "./data/mantel.jpg", nombreProducto: "Mantel", descripcion: "Mantel para mesa de comedor",
fechaCarga: 07/12/2023}]

const comentarios = [{nombreUsuario: "Manuel",
    textoComentario: "Excelente producto",
    imagenPerfil: "./data/Default_pfp.png"}]

module.exports = user; 
module.exports = products; 
module.exports = comentarios;