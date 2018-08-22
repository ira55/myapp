module.exports = (sequelize, DataTypes) => {  
  const Account = sequelize.define('account', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.UUIDV4
    },
    cardNumber: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: { 
        isCreditCard: true 
      }
    },
    amount: {
      type: DataTypes.INTEGER
    },
    available: {
      type: DataTypes.BOOLEAN
    }
  });
  return Account;
};
  