function NotesApp(){
    console.log("initializing the notes app");
    
    // set the notes container element so that we know where to add notes
    this.notesContainer = document.querySelector(".notes");
    
    // set the notes text element so that we know where to grab the notes text
    this.notesInput = document.querySelector("#txtAddNote");
    
    // bind event to the add button
    this.btnAdd = document.getElementById("btnAddNote");
    this.btnAdd.addEventListener("click", this.addNote.bind(this));
}

NotesApp.prototype.addNote = function(e){
    console.log("adding note");
    
    // add a new note to the screen
    var message = this.notesInput.value;
    var newNote = document.createElement("div");
    newNote.innerHTML = "<p>" + message + "</p>" + "<a class='card-remove' href='#'>Remove</a>";
    newNote.setAttribute("class", "card");
    newNote.addEventListener("click", this.removeNote.bind(this));
    this.notesContainer.appendChild(newNote);
    
    // clear the notes form
    this.resetNotesForm();
    
    e.preventDefault();
}

NotesApp.prototype.removeNote = function(event){
    console.log("removing note");
    
    var elementToDelete = event.target.parentElement;
    this.notesContainer.removeChild(elementToDelete);
    
    //elementToDelete.parentElement.removeChild(elementToDelete);
}

NotesApp.prototype.resetNotesForm = function(){
    console.log("resetting the notes form");
    
    this.notesInput.value = "";
    this.notesInput.focus();
}

var app = new NotesApp();
