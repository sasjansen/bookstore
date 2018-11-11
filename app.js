const app = new Vue({
    el: '.maincontainer',
    data: {
        books: []
    },
    created() {
        fetch('https://api.myjson.com/bins/1h3vb3')
            .then(response => response.json())
            .then(json => {
                this.books = json.books
            })
    }
})

$(document).ready(function () {
    $("#input").on("keyup", function () {
        var value = $(this).val().toLowerCase();        
        var booksinHtml = document.getElementsByClassName("search")
        for (var i = 0; i < booksinHtml.length;i++) {
            var book = booksinHtml[i];
            $(book.parentNode.parentNode).hide();
        }
        for (var i = 0; i < booksinHtml.length;i++) {
            var book = booksinHtml[i];
            if (book.innerHTML.toLowerCase().indexOf(value) != -1) {
                $(book.parentNode.parentNode).show();
            }
        }
    });
});
