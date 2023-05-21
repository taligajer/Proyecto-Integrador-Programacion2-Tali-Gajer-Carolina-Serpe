module.exports = function (sequelize, datatypes){
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primarykey: true,
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
    return Producto;
}