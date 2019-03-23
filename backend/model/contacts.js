'use strict'

const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const ContactsSchema = Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: validateOnlyLetters,
            message: props => `${props.value} is not a valid name`
        }
          
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: validateOnlyLetters,
            message: props => `${props.value} is not a valid Last name`
        }
    },
    company: {
        type: String,
        sparse: true,
        validate: {
            validator: validateAlphanumeric,
            message: props => `${props.value} is not a valid company name`
          }
    },
    phoneNumber: {
        type: Number,
        sparse: true,
        validate: {
            validator: validateOnlyNumbers,
            message: props => `${props.value} is not a valid phone number`
          },
        unique: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validateMail,
            message: props => `${props.value} is not a valid email`
          },
        unique: true
    }
})

ContactsSchema.plugin(uniqueValidator)


//validations
function validateOnlyLetters (value){
    return /^[a-z]+$/i.test(value);
}
function validateAlphanumeric (value){
    return  /^[a-z1-9]+$/i.test(value);
}
function validateOnlyNumbers (value){
    return  /^[\d]+$/i.test(value);
}
function validateMail (value){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

module.exports = mongoose.model('Contacts', ContactsSchema)
