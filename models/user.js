module.exports = (sequelize, DataTypes) => {  
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: { 
        isEmail: true 
      }
    },
    login: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
  });
  return User;
}; 
