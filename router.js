const authController = require('./controllers/auth');
const accountController = require('./controllers/account');

module.exports.set = app => {

     app.post('/login', authController.login);

     app.post('/register', authController.register);

     app.get('/accounts', accountController.getCards);

     app.get('/accounts/:id', accountController.getCard);

     app.post('/accounts', accountController.addAccount);

    //  app.post('/account', accountController.addSum);

}