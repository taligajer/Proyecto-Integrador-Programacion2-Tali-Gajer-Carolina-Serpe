module.exports = function (sequelize, datatypes){ //datatypes permite declarar que tipo de datos tienen los datos de las columnas de la tabla
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER 
        },
        email: {
            type:datatypes.STRING
        },
        contrasenia: {
            type: datatypes.STRING(500)
        },
        fotoPerfil: {
            type: datatypes.STRING(200)
        },
        fecha:{
            type: datatypes.DATE
        },
        dni:{
            type: datatypes.INTEGER
        },
        createdAt:{
            type: datatypes.DATE,
            allowNull:true
        },
        updatedAt:{
            type: datatypes.DATE,
            allowNull:true
        },
        deletedAt:{
            type: datatypes.DATE
        },
    }
    let config = {
        tableName: 'usuarios', //nombre de la tabla
        timestamps: false,
        underscored: false
    }

    const Usuario = sequelize.define(alias, cols, config);
        Usuario.associate = function(models){
            Usuario.hasMany(models.Product, {
                as: "usuarioProducto",
                foreignKey: "userId"
            }),
            Usuario.hasMany(models.Comentario, {
                as: "usuarioComentario",
                foreignKey: "idUsuario"
            })
        }
        return Usuario;
    }
