/* 
	Sudoku table object
*/
function sudokuTable(){
	this.table = new Array(9);
	defaultTable = "040031069007000045030400000200000670800000003075000002000004080690000700720610090";
} 

/* 
	Main function called for initialization of event listeners and the inital table
*/
function main(){
	gameTable = new sudokuTable;
	
}

/* 
	table generation using DOM scripting
	form the html string and then return it to the 
	div with id 'table'
*/
function tableGen(){
	var html = "<table>";
	
	var html += "</table";
	
	return html;
}