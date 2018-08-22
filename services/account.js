const Accounts = require('../models').Account;

const getAll = () => Accounts.findAll();

const getById = id => Accounts.findById(id);

const addCard = card => Accounts.create(card);

const addAmount = (id, amount) => Accounts.update(amount,{ 
    where:{
        id: id
    }
})

module.exports = {
    addCard,
    addAmount, 
    getAll, 
    getById
};