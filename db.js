const config = require('./config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host || 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

  });

  require('sequelize-values')(sequelize);
  const db = {};

  db.Sequelize = Sequelize;  
  db.sequelize = sequelize;
  
  //Models/tables
  db.users = require('./models/user.js')(sequelize, Sequelize);  
  db.accounts = require('./models/account.js')(sequelize, Sequelize);  
  db.transactions = require('./models/transactions.js')(sequelize, Sequelize);
  
  //Relations
  db.transactions.belongsTo(db.accounts);  
  db.accounts.hasMany(db.transactions);  
  db.accounts.belongsTo(db.users);  
  db.users.hasMany(db.accounts);
  
  module.exports = db;  
  module.exports = sequelize;
