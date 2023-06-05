module.exports = function (sequelize, datatypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER 
        },
        idPost: {
            type:datatypes.INTEGER
        },
        idUsuario: {
            type: datatypes.INTEGER
        },
        comentario:{
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
        underscored: false
    }

    const Comentario = sequelize.define(alias, cols, config);
        Comentario.associate = function(models){
            Comentario.belongsTo(models.Product, {
                as: "producto",
                foreignKey: "idPost"
            });
            Comentario.belongsTo(models.Usuario,{
                as: "usuarioComentario",
                foreignKey: "idUsuario"
            })
        }
        return Comentario;
    }
