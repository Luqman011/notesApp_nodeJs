
const yargs = require('yargs');
const notes = require('./notes.js');
const command = process.argv[2];

//create the add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title:{
        describe: 'note title',
        demandOption: true,
        type: 'string'
    }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'reading note',
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(){
       notes.listNote();
    }
})

yargs.parse()





