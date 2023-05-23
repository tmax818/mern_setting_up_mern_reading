const PersonController = require('../controllers/person.controller');

module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople); // add route to get all people
    app.get('/api/people/:id', PersonController.getPerson); // get one
    app.patch('/api/people/:id', PersonController.updatePerson); //update
    app.delete('/api/people/:id', PersonController.deletePerson);
}