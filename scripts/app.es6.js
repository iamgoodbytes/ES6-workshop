class NotesApp {
    constructor(){
        console.log("initializing the notes app");
        // set the notes container element so that we know where to add notes
        this.notesContainer = document.querySelector(".notes");

        // set the notes text element so that we know where to grab the notes text
        this.notesInput = document.querySelector("#txtAddNote");

        // bind event to the add button
        this.btnAdd = document.getElementById("btnAddNote");
        this.btnAdd.addEventListener("click", this.addNote.bind(this));
    }
    
    addNote(e){
        console.log("adding note");

        // add a new note to the screen
        var message = this.notesInput.value;
        var newNote = document.createElement("div");
        var deleteLink = document.createElement("a");
        deleteLink.setAttribute("class", "card-remove");
        deleteLink.setAttribute("href", "#");
        deleteLink.innerHTML = "Remove";
        deleteLink.addEventListener("click", this.removeNote.bind(this));
        
        newNote.innerHTML = "<p>" + message + "</p>";
        newNote.setAttribute("class", "card");
        newNote.appendChild(deleteLink);
        
        this.notesContainer.appendChild(newNote);

        // clear the notes form
        this.resetNotesForm();

        e.preventDefault();
    }

    removeNote(event){
        console.log("removing note");

        var elementToDelete = event.target.parentElement;
        this.notesContainer.removeChild(elementToDelete);
        console.log(event);
        event.preventDefault();
    }

    resetNotesForm(){
        console.log("resetting the notes form");

        this.notesInput.value = "";
        this.notesInput.focus();
    }
}



var app = new NotesApp();
