export default class Filter {
    constructor() {
        var input, filter, table, tr;

        this.input = document.getElementById("searchQuery");
        this.filter = input.value.toUpperCase();
        this.table = document.getElementById("table");
        this.tr = table.getElementsByTagName("tr");
    }

    onKeyDown() {

        var i, txtValue, descValue;
        this.input.onchange = () => {
            // Loop through results, hide missed results
            for (i = 0; i < tr.length; i++) {
                let title = tr[i].getElementsByTagName("td")[0];
                let desc = tr[i].getElementsByTagName("td")[1];
                if (title || desc) {
                    txtValue = title.textContent || title.innerText || title.innerHTML;
                    descValue = desc.textContent || desc.innerText || desc.innerHTML;
                    if (txtValue.toUpperCase().indexOf(filter) > -1 ||
                        descValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }
}