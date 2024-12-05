module.exports = (sequelize, DataTypes) => {
    return sequelize.define('transaction_log', {
        name: {
            type: DataTypes.STRING
        }
    })
}