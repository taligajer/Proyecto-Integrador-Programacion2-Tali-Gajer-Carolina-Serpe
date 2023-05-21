module.exports = function (sequelize, datatypes){
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primarykey: true,
            type: datatypes.INTEGER 
        },
        email: {
            type:datatypes.STRING(150)
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
            type: datatypes.DATE
        },
        updatedAt:{
            type: datatypes.DATE
        },
        deletedAt:{
            type: datatypes.DATE
        },
    }
    let config = {
        tableName: 'usuarios', //nombre de la tabla
        timestamps: false,
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}