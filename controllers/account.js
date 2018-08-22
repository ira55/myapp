const accountService = require('../services/account');


function getCards(req, res){

    accountService.getAll()

     .then(data => res.send(data));

};


function getCard(req, res){

    accountService.getById(req.params.id)

     .then(data => res.send(data));

}


function addAccount(req, res){

    accountService.addCard({

        cardNumber: req.body.cardNumber,

        user_id: 1

     })

     .then(data => res.send(data));

};

function addSum(req, res){
    accountService.addAmount({
        amount: req.body.amount
    })
    .then((data, sum) => res.send(data + sum));
}


module.exports = {

     getCards,

     getCard,

     addAccount,
    
     addSum

}