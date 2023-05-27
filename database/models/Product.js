module.exports = function (sequelize, datatypes){
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER 
        },
        user_id: {
            type:datatypes.INTEGER
        },
        nombreProduct: {
            type: datatypes.STRING(200)
        },
        descripcion: {
            type: datatypes.STRING(200)
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
        tableName: 'productos', //nombre de la tabla
        timestamps: false,
        underscored: true
    }

    const Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models){
        Producto.associate = function(models){
            Producto.hasMany(models.Comentario, {
                as: "ProdRelCom",
                foreignKey: "idPost" //REVISAR
            });
        }
    }
    
    Producto.associate = function(models){
        Producto.associate = function(models){
            Producto.belongsTo(models.Usuario, {
                as: "ProdRelCom",
                foreignKey: "user_id" //REVISAR
            });
        }
    }

    return Producto;

}

    