const fs = require('fs');
const path = require('path');

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function removeNote (note, notesArray) {
    const noteId = note.id;
    notesArray.splice(noteId, 1);

    for (let i = 0; i < notesArray.length; i++) {
        notesArray[i].id = i;
        // JSON.stringify(notesArray[i]);
    }

    console.log(notesArray);
}

module.exports = {
    createNewNote,
    validateNote,
    findById,
    removeNote
};