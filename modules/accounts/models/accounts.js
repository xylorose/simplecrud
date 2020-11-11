const {DataTypes, DATE} = require("sequelize");
const instance = require("../../../dbconnection");

const account = instance.sequelize.define("accounts", {
    id: {
        allowNull:false, 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "accounts"
    }
)

exports.account = account;