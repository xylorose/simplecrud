const {DataTypes, DATE} = require("sequelize");
const instance = require("../../../dbconnection");

const accountinformation = instance.sequelize.define("accountinformation", {
    id: {
        allowNull:false, 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      middleName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "accountinformation"
    }
)

exports.accountinformation = accountinformation;