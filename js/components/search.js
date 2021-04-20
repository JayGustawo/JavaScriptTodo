
export default class SearchList {
    constructor(){
        this.query = document.getElementById('searchQuery');
        this.searchBtn = document.getElementById('searchBtn');
    }
    searchList() {
        var searchValue = document.getElementById('searchQuery').value; //get value from textBox by ID Field onkeyUp function 
        var searchTable = table; //Search Value In Table search Table by Id 
        var searchColCount; //Column counter
    
        //Loop through table rows
        for (let rowIndex = 0; rowIndex < searchTable.rows.length; rowIndex++) {
            var rowData = '';
            //Get column count from header row
            if (rowIndex == 0) {
                searchColCount = searchTable.rows.item(rowIndex).cells.length;
                continue; //do not execute further code for header row.
            }
            //Process data rows. (rowIndex >= 1)
            for (var colIndex = 0; colIndex < searchColCount; colIndex++) {
                rowData += searchTable.rows.item(rowIndex).cells.item(colIndex).textContent;
            }
            //If search term is not found in row data
            //then hide the row, else show
            if (rowData.indexOf(searchValue) == -1)
                searchTable.rows.item(rowIndex).style.display = 'none';
            else
                searchTable.rows.item(rowIndex).style.display = 'table-row';
        }
    }
}
