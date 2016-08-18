class NotesApplication{
	
	constructor (author) {
		this.author = author;
		this.noteList = [];
	}

/** Fuction to takes note content and 
* adds to the note list object
*/
create(note_content) {
	  this.noteList.push(note_content);
	return this.noteList;
}

/** function to list out notes in noteList
*/
list(){
	for (let note_id in this.noteList){
		console.log('Note ID: '+ note_id + '\n'
                    +this.noteList[note_id] + '\n'
                    +'By Author ' + this.author);
	}
}
/**function to get the ID of the note and 
*return the content of that index as a string
*/
toGet(note_id){
	if(this.noteList.length === 0){
		return  'No ID to get from empty list'
	}
	return this.noteList[note_id];
}

/**function to search text
*/
search(search_text){
		for(let note_id in this.noteList){ //loop through noteList to search for the text
			if (this.noteList[note_id].includes(search_text)){
				console.log('Showing result for search: ' + '['+search_text+']' + '\n'
                             + 'Note ID: ' + note_id + '\n'
                             + this.noteList[note_id] + '\n'
                             +'By Author ' + this.author);
			}
			return 'Not Found' //returns this if the text is not found in the noteList
		}
}

/**function to delete note id
*/
toDelete(note_id){
	this.noteList.splice(note_id,1); 
	return this.noteList;
}

/**function to edit note content
*/
edit(note_id, new_content){
	this.noteList[note_id] = new_content //value of noteLists noteid is assigned to new_content
	return this.noteList; //return notelist
}
}
