const Sequelize = require('sequelize');

const sequelize = require('../db');


const User = sequelize.define('user', {

     login: Sequelize.STRING,

     password: Sequelize.STRING,

});


const Account = sequelize.define('account', {

     title: Sequelize.STRING,

     date: {

          type: Sequelize.DATE,

          defaultValue: Sequelize.NOW

     },

     user_id: {

          type: Sequelize.INTEGER,

          references: {

               model: User,

               key: 'id'

          }

     }

});


// User.hasMany(Account, {foreignKey: 'user_id'});
// // User.belongsToMany(Transactions, {foreignKey: 'user_id'});
// // Account.hasMany(Transactions, {foreignKey: 'account_id'});
// Account.belongsTo(User, {foreignKey: 'account_id'});


module.exports = {

     User,

     Account

}

