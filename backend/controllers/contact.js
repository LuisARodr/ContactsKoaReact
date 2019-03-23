'use strict'
const Contact = require ('./../model/contacts')

async function getContact(ctx){
    // Fetch all Todo’s from the database and return as payload
    const contacs = await Contact.findById(ctx.params.contactId)
    ctx.body = contacs
}

async function getContacts(ctx){
    // Fetch all Todo’s from the database and return as payload
    const contacs = await Contact.find({})
    ctx.body = contacs
}

async function saveContact(ctx){        
    console.log('Post /api/contact')
    console.log(ctx.request.body)
    const newContact = new Contact(ctx.request.body)
    const savedContact = await newContact.save()
    ctx.body = savedContact
}

async function updateContact(ctx){
    // Find contact based on id, then toggle done on/off
    const id = ctx.params.contactId
    const contact = await Contact.findByIdAndUpdate(id, ctx.request.body)
    ctx.body = contact
}

async function deleteContact(ctx){
    // Get id from url parameters and find Todo in database
    const id = ctx.params.contactId
    const contact = await Contact.findById(id)

    // Delete todo from database and return deleted object as reference
    const deletedContact = await contact.remove()
    ctx.body = deletedContact
}

module.exports = {
    getContact,
    getContacts,
    saveContact,
    updateContact,
    deleteContact
}