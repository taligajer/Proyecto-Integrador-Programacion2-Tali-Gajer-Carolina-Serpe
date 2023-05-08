//demo

module.exports = function (sequelize, datatypes){
    let alias = "movie";
    let cols = {
        id: {
            autoIncrement: true,
            primarykey: true,
            type: datatypes.INTEGER 
        },
        title: {
            type:datatypes.STRING
        },
        reating: {
            type: datatypes.DECIMAL
        },
        awards:{
            type: datatypes.INTEGER //entero
        },
        realese_data:{
            type: datatypes.DATE
        },
        length:{
            type: datatypes.INTEGER
        },
        genre_id:{
            type: datatypes.STRING
        },
    }
    let config = {
        tableName: 'movies', //nombre de la tabla
        timestamps: false,
        underscored: true
    }

    const movie = sequelize.define(alias, cols, config);
    return movie;
}

