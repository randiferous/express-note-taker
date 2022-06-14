const router = require('express').Router();
const { findById, createNewNote, validateNote, removeNote } = require('../lib/notes');
const {notes} = require('../db/db.json');

router.get('/notes', (req, res) => {
    const result = notes;
    if (result) {
        res.json(result);
    } else {
        res.send(400);
    }
});

router.post('/notes', (req, res) => {
        req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('This note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);
    removeNote(note, notes)
    res.json(notes)
})

module.exports = router;

