const  user = {
    email: "manuel@gamil.com",
    usuario: "ManuelGomez",
    fechaNacimiento:'1/03/2001',
    numeroTel: '11-4859-9234', 
    fotoPerfil: "default_pfp.png",
    
}
// ver que onda si esto funciona o no --> tema de la imagen y como vincularla para que aparezca en las otras paginas que pide la consigna 
// faltan poner 5 productos mas y la parte de comentarios 
const products = [{imagen: "manta.jpeg", nombreProducto: "Manta Norwegian", descripcion: "Manta de 50x70 cm", fechaCarga:'4/03/2023', comentarios: "Execelnte producto", alt: "manta"},
{imagen: "termo.jpeg", nombreProducto: "Termo", descripcion: "Termo para mate", fechaCarga: '23/09/2023', alt: "Termo", comentarios: "Excelente producto"}, 
{imagen: "almohadon.jpeg", nombreProducto: "Almohadon", descripcion: "Almohadon", fechaCarga: '25/05/2023', comentarios: "Excelente producto", alt: "almohadon"}, 
{imagen: "mesa.jpeg", nombreProducto: "Mesa", descripcion: "Mesa de comedor", fechaCarga: '12/06/2023', comentarios: "Excelente producto", alt: "Mesa"}, 
{imagen: "silla.jpeg", nombreProducto: "Silla", descripcion: "Silla de comedor", fechaCarga:'9/06/2023', comentarios: "Excelente producto", alt: "Silla"}, 
{imagen: "sillon.jpg", nombreProducto: "Sillon", descripcion: "Sillon para living", fechaCarga:'8/09/2023', comenarios: "Excelente producto", alt: "Sillon"}, 
{imagen: "Cama.jpg", nombreProducto: "Cama", descripcion: "Cama de 2 plazas", fechaCarga: '28/02/2022', comentarios: "Excelente producto", alt: "Cama"}, 
{imagen: "mesaratona.jpg", nombreProducto: "Mesa ratona", descripcion: "Mesa ratona para lampara",
fechaCarga:'5/06/2023', comentarios: "Excelente producto", alt: "Mesa"}, 
{imagen: "Lampara.jpg", nombreProducto: "Lampara", descripcion: "Lampara de mesa", fechaCarga:'6/07/2023', comentarios: "Excelente producto", alt: "Lampara"}, 
{imagen: "mantel.jpg", nombreProducto: "Mantel", descripcion: "Mantel para mesa de comedor", fechaCarga:'7/12/2023', comentarios: "Excelente producto", alt: "Mantel"}]

const comentarios = 
    [{nombreUsuario: "Manuel", textoComentario: "Excelente producto", imagenPerfil: "Default_pfp.png"}, 
    {nombreUsuario: "Camila", textoComentario:"De los mejores", imagenPerfil: "Default_pfp.png"}, 
    {nombreUsuario: "Julieta", textoComentario: "Excelente producto", imagenPerfil: "Default_pfp.png"}, 
    {nombreUsuario: "Alan", textoComentario: "Muy buena calidad", imagenPerfil: "Default_pfp.png"}, 
    {nombreUsuario: "Luis", textoComentario: "El mejor de todos", imagenPerfil: "Default_pfp.png"}, 
    {nombreUsuario: "Tomas", textoComentario: "Muy buen producto", imagenPerfil: "Default_pfp.png"},
    {nombreUsuario: "Valentina", textoComentario: "Excelente calidad", imagenPerfil: "Default_pfp.png"}, 
    {nombreUsuario: "Ezequiel", textoComentario: "Muy lindo", imagenPerfil: "Default_pfp.png"},
    {nombreUsuario: "Santiago", textoComentario: "Excelente producto", imagenPerfil: "Default_pfp.png"}, 
    {nombreUsuario: "Catalina", textoComentario: "Me encanto", imagenPerfil: "Default_pfp.png"}]

module.exports = {
    user,
    products,
    comentarios
}
