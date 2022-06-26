
 const fs = require('fs')



const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title )

    debugger

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('new note added')
      
    }else{
        console.log('note title taken!')
    }

    

    
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

//remove command and function

const removeNote = (title) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title ===  title)

    if(duplicateNotes.length !== 0){
        notes.pop({
            title: title
        })
        saveNotes(notes)
        console.log('note removed successfully')

    }else{
        console.log('no note removed')
    }
}
//loading
const listNote = (title) => {
    
    const notes = loadNotes();
    console.log('your notes!!!')
    notes.forEach((note) => {
        console.log(note.title )
    });
    
}


// reading note
 const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title )

    if(note){
        console.log(note.title)
        console.log(note.body)
        
    }else{
        console.log('Note was not found!!!!')
    }
 }



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}
