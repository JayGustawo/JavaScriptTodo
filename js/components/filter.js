export default class Filter {
    constructor() {
        this.input = document.getElementById("searchQuery");
        this.table = document.getElementById("table");
        this.tr = this.table.getElementsByTagName("tr");
        this.radios = document.querySelectorAll('input[name="type"]');
        this.tr = document.getElementById('table').getElementsByTagName('tr');

    }

    onKeyup(callback) {
        this.input.onkeyup = () => {
            callback(this.input.value.toUpperCase());
        }
    }
    onButtonClick(callback) {
        this.radios.forEach((elem) => {
            elem.addEventListener("change", (event) => {
                this.item = event.target.value;
                callback(this.item, this.tr);
            })
        })
    }


}
