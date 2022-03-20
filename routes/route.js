const express = require("express");
const Router = express.Router();
const Contacts = require("../models/contact");
const conn = require("../connection");

const success = {
    status: 200,
    value : "Success"
}

const error = {
    status: 404,
    value : "ERROR"
}


Router.get("/contacts", (req, res) => {
    Contacts.find((err, contacts) => {
        if (err) {
            console.log(err);
        }
        res.json(contacts);
    });
});


Router.post("/contacts", (req, res) => {
    var model = new Contacts();
    model.first_name = req.body.first;
    model.last_name = req.body.last;
    model.phone = req.body.phone;

    model.save((err) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(success);
    });
    

});

Router.put("/contacts", (req, res) => {
    var id = req.body.id;
    var first = req.body.first;
    var last = req.body.last;
    var phone = req.body.phone;
    
    Contacts.findById(id, (err, updatedContact) => {
        if (err) {
            res.json(error);
            
        }
        updatedContact.first_name = first;
        updatedContact.last_name = first;
        updatedContact.phone = phone;
        updatedContact.save();
        res.json(success);
    });

});




Router.delete("/contacts/:id", (req, res) => {
    var id = req.params.id;
    Contacts.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.log(err);
        }
        res.json(success);
    });
});




module.exports = Router;