const { Person } = require('../models/person.model');
const {res} = require("express");
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createPerson = (req, res) => {
    const { firstName, lastName } = req.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => res.json(person))
        .catch(err => res.json(err));
}
// add in list and detail
module.exports.getAllPeople = (req, res) => {
    Person.find({})
        .then(persons => res.json(persons))
        .catch(err => res.json(err))
}

module.exports.getPerson = (req, res) => {
    Person.findOne({_id:req.params.id})
        .then(person => res.json(person))
        .catch(err => res.json(err))
}

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation =>response.json(deleteConfirmation))
        .catch(err =>response.json(err))
}



