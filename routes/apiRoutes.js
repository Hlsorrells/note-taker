// API Routes
const router = require('express').Router()
const fs = require('fs')
// Data
let notes = require('../db/db.json')

// Retrieve current notes
router.get('/notes', (req, res) => {
    res.json(notes)
})

// Create a new note
router.post('/notes', (req, res) => {
    var newNote = req.body
    if (notes.length) {
        newNote.id = notes[notes.length - 1].id + 1
    } else {
        newNote.id = 1
    }
    notes.push(newNote)
    fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
        console.log(err)
        res.sendStatus(200)
    })
})

// Delete a note
router.delete("/notes/:id", (req, res) => {
    const removeNote = parseInt(req.params.id)
    const newArr = notes.filter(note => note.id !== removeNote)
    fs.writeFile('./db/db.json', JSON.stringify(newArr), err => {
        notes = newArr
        res.sendStatus(200)
    })
})

module.exports = router