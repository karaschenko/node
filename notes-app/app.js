const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');

//create add command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'remove note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler (argv) {
    notes.removeNote(argv.title);
  }
});

//create list command
yargs.command({
  command: 'list',
  describe: 'list notes',
  handler() {
    notes.listNotes();
  }
});

//create read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
