/* 
	Sudoku table object
*/
function sudokuTable(){
	this.activeTable = new Array(9);
	this.solvedTable = new Array(9);
	defaultTable = "040031069007000045030400000200000670800000003075000002000004080690000700720610090";
	solvedTable = "";
}

/* 
	Generates the activeTable array as well as the solvedTable array
	
	! Need to add in the solvedTable code
*/
sudokuTable.prototype.popTable = function (){
	var i = 0;
	var nine = 9;
	
	for (i = 0; i < 81; i++){
		if (i % nine == 0){
			this.activeTable[i%nine] = new Array(9);
		}
		this.activeTable[parseInt(i/nine)][i%nine] = parseInt(defaultTable[i]);
	}
}

/* 
	Main function called for initialization of event listeners and the inital table
*/
function main(){
	var gameBoard = document.getElementById('table');
	gameTable = new sudokuTable;
	
	gameBoard.innerHTML = tableGen;
	
}

/* 
	table generation using DOM scripting
	form the html string and then return it to the 
	div with id 'table'
*/
function tableGen(){
	var i = 0;
	var k = 0;
	var nine = 9;
	
	/* Populate the table with the defaultTable */
	var html = "<table>";
	
	var html += "</table";
	
	return html;
}