class NotesApplication{
	let noteList = [];
	constructor (author){
		this.author = author;
	}
	
/** Fuction to takes note content and 
* adds to the note list object
*/
create(note_content) {
	result = noteList.push(note_content); //save the new noteList in result var since push doesnt return
	return result;
}

/** function to list out notes in noteList
*/
list(){
	for (var note_id in noteList){
		console.log('Note ID: '+ note_id);
		console.log(noteList[note_id]);
		console.log('By Author' + this.author);
	}
/**function to get the ID of the note and 
*return the content of that noteid index as a string
*/
toGet(note_id){
	return noteList[note_id];
}

/**function to search text
*/
search(search_text){
	console.log('Showing result for search ' + search_text)
	console.log('Note ID: '+ note_id);
	console.log(noteList[note_id]);
	console.log('By Author' + this.author)
}

/**function to delete note id
*/
toDelete(note_id){
 	noteList.splice(note_id,1); //removes the element with index note_id
	return noteList;
}
/**function to edit note content
*/
edit(note_id, new_content){
	noteList[note_id] = new_content //assign the value of noteid index to newcontent
	return noteList;
}
}
