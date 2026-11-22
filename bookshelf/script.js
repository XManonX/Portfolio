
let searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        let searchValue = this.value.toLowerCase();
        let books = document.querySelectorAll(".book-card");

        books.forEach(function (book) {
            let title = book.querySelector("h3").textContent.toLowerCase();
            let author = book.querySelector("p").textContent.toLowerCase();

            if (title.includes(searchValue) || author.includes(searchValue)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });
}