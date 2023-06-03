module.exports = function (sequelize, datatypes){
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER 
        },
        userId: {
            type:datatypes.INTEGER
        },
        nombreProducto: {
            type: datatypes.STRING
        },
        descripcion: {
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
        tableName: 'products', //nombre de la tabla
        timestamps: false,
        underscored: false
    }

    const Producto = sequelize.define(alias, cols, config);
    
        Producto.associate = function(models){
            Producto.hasMany(models.Comentario, {
                as: "ProdRelCom",
                foreignKey: "idPost" //REVISAR
            });
        
        Producto.associate = function(models){
            Producto.belongsTo(models.Usuario, {
                as: "ProdRelUsu",
                foreignKey: "userId", //REVISAR
               
            });
        }
    }

    return Producto;

}

    