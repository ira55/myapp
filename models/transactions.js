module.exports = (sequelize, DataTypes) => {  
  const Transactions = sequelize.define('transactions', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.UUIDV4
    },
    accountFromId: DataTypes.INTEGER,
    accountToId: DataTypes.INTEGER,
    date: {
      type: DataTypes.DATE,
      validate: { 
        isDate: true 
      }
    },
    amount: DataTypes.INTEGER,
    comments: DataTypes.TEXT
  });
  return Transactions;
};
  