const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...'
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const searchNote = notes.find((note) => note.title === title);

  if (searchNote) {
    console.log(chalk.green(searchNote.title));
    console.log(chalk.bold(searchNote.body));
  } else {
    console.log(chalk.red.inverse('sry, there is no such a note in the list'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToSave = notes.filter((note) => note.title !== title);
  if (notesToSave.length < notes.length) {
    saveNotes(notesToSave);
    console.log(chalk.green.inverse('Title was removed from the list'));
  } else {
    console.log(chalk.red.inverse('Can\'t find title in list!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green('Your notes'));
  notes.forEach((note) => {
    console.log(chalk.bold(note.title));
  })
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes =  () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return []
  }

};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
