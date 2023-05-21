module.exports = function (sequelize, datatypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primarykey: true,
            type: datatypes.INTEGER 
        },
        idPost: {
            type:datatypes.INTEGER
        },
        idUsuario: {
            type: datatypes.INTEGER
        },
        Comentario:{
            type: datatypes.STRING
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
        tableName: 'comentarios', //nombre de la tabla
        timestamps: false,
        underscored: true
    }

    const Comentario = sequelize.define(alias, cols, config);
    return Comentario;
}
