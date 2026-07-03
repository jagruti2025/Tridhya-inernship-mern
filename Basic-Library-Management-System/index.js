
//this array is used to store the books in the library.
let books = [];
let editIndex = -1;
let deleteIndex = -1;


window.addEventListener("DOMContentLoaded", function () {
    loadBooks();           
    displayBooks(books);   
    updateStatistics();    

    document.getElementById("bookForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        addBook();
    });

    document.getElementById("updateBookBtn").addEventListener("click", function () {
        updateBook();
    });

    document.getElementById("cancelEditBtn").addEventListener("click", function () {
        resetForm();
    });

    document.getElementById("searchBook").addEventListener("input", function () {
        searchBook();
    });

    document.getElementById("headerSearch").addEventListener("input", function () {
        document.getElementById("searchBook").value = document.getElementById("headerSearch").value;
        searchBook();
    });

    document.getElementById("filterCategory").addEventListener("change", function () {
        filterBooks();
    });

    document.getElementById("filterStatus").addEventListener("change", function () {
        filterBooks();
    });

    document.getElementById("sortBooks").addEventListener("change", function () {
        sortBooks();
    });

    document.getElementById("openAddBookBtn").addEventListener("click", function () {
        document.getElementById("bookFormSection").scrollIntoView({ behavior: "smooth" });
        document.getElementById("bookTitle").focus();
    });

    document.getElementById("emptyStateAddBtn").addEventListener("click", function () {
        document.getElementById("bookFormSection").scrollIntoView({ behavior: "smooth" });
        document.getElementById("bookTitle").focus();
    });

    document.getElementById("cancelDeleteBtn").addEventListener("click", function () {
        closeDeleteModal();
    });

    document.getElementById("deleteModalBackdrop").addEventListener("click", function () {
        closeDeleteModal();
    });

    document.getElementById("confirmDeleteBtn").addEventListener("click", function () {
        confirmDeleteBook();
    });
});

function loadBooks() {
    let storedBooks = localStorage.getItem("libraryBooks");

    if (storedBooks !== null) {
        books = JSON.parse(storedBooks);
    } else {
        books = [];
    }
}

function saveBooks() {
    localStorage.setItem("libraryBooks", JSON.stringify(books));
}

function addBook() {

    let titleValue = document.getElementById("bookTitle").value.trim();
    let authorValue = document.getElementById("author").value.trim();
    let categoryValue = document.getElementById("category").value;
    let isbnValue = document.getElementById("isbn").value.trim();
    let yearValue = document.getElementById("publishYear").value.trim();
    let statusValue = document.getElementById("status").value;

    if (titleValue === "" || authorValue === "" || categoryValue === "" || isbnValue === "" || yearValue === "") {
        alert("Please fill all the fields before adding a book.");
        return; 
    }

    let newBook = {
        title: titleValue,
        author: authorValue,
        category: categoryValue,
        isbn: isbnValue,
        year: yearValue,
        status: statusValue
    };

    books.push(newBook);

    saveBooks();

    displayBooks(books);
    updateStatistics();

    resetForm();
}

function displayBooks(bookList) {
    let tableBody = document.getElementById("booksTableBody");

    tableBody.innerHTML = "";

    if (bookList.length === 0) {
        document.getElementById("emptyState").classList.remove("hidden");
        document.getElementById("emptyState").classList.add("flex");
        return;
    } else {
        document.getElementById("emptyState").classList.add("hidden");
        document.getElementById("emptyState").classList.remove("flex");
    }

    for (let i = 0; i < bookList.length; i++) {
        let book = bookList[i];

        let statusBadge = "";
        if (book.status === "Available") {
            statusBadge =
                '<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">' +
                '<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Available</span>';
        } else {
            statusBadge =
                '<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-600">' +
                '<span class="h-1.5 w-1.5 rounded-full bg-rose-500"></span>Borrowed</span>';
        }

        let rowHTML =
            '<tr class="hover:bg-slate-50 transition-colors duration-150">' +
                '<td class="px-6 py-4 text-slate-500">' + (i + 1) + '</td>' +
                '<td class="px-6 py-4 font-medium text-slate-900">' + book.title + '</td>' +
                '<td class="px-6 py-4 text-slate-600">' + book.author + '</td>' +
                '<td class="px-6 py-4">' +
                    '<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600">' + book.category + '</span>' +
                '</td>' +
                '<td class="px-6 py-4 text-slate-500">' + book.isbn + '</td>' +
                '<td class="px-6 py-4 text-slate-600">' + book.year + '</td>' +
                '<td class="px-6 py-4">' + statusBadge + '</td>' +
                '<td class="px-6 py-4">' +
                    '<div class="flex items-center justify-center gap-2">' +
                        '<button data-index="' + i + '" class="edit-book-btn inline-flex items-center justify-center h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors duration-150" title="Edit Book">' +
                            '<i class="fa-solid fa-pen text-xs"></i></button>' +
                        '<button data-index="' + i + '" class="borrow-return-btn inline-flex items-center justify-center h-8 w-8 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors duration-150" title="Borrow / Return">' +
                            '<i class="fa-solid fa-right-left text-xs"></i></button>' +
                        '<button data-index="' + i + '" class="delete-book-btn inline-flex items-center justify-center h-8 w-8 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors duration-150" title="Delete Book">' +
                            '<i class="fa-solid fa-trash text-xs"></i></button>' +
                    '</div>' +
                '</td>' +
            '</tr>';

        tableBody.innerHTML += rowHTML;
    }

    attachRowButtonEvents();
}

function attachRowButtonEvents() {
    let editButtons = document.querySelectorAll(".edit-book-btn");
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", function () {
            let index = Number(this.getAttribute("data-index"));
            editBook(index);
        });
    }

    let deleteButtons = document.querySelectorAll(".delete-book-btn");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function () {
            let index = Number(this.getAttribute("data-index"));
            deleteBook(index);
        });
    }

    let borrowButtons = document.querySelectorAll(".borrow-return-btn");
    for (let i = 0; i < borrowButtons.length; i++) {
        borrowButtons[i].addEventListener("click", function () {
            let index = Number(this.getAttribute("data-index"));
            toggleStatus(index);
        });
    }
}


function deleteBook(index) {
    deleteIndex = index;

    document.getElementById("deleteModal").classList.remove("hidden");
    document.getElementById("deleteModal").classList.add("flex");
}

function confirmDeleteBook() {
    if (deleteIndex !== -1) {
        books.splice(deleteIndex, 1);
        saveBooks();
        displayBooks(books);
        updateStatistics();
    }

    closeDeleteModal();
}

function closeDeleteModal() {
    deleteIndex = -1;
    document.getElementById("deleteModal").classList.add("hidden");
    document.getElementById("deleteModal").classList.remove("flex");
}

function editBook(index) {
    let book = books[index];
    editIndex = index;

    document.getElementById("bookTitle").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("category").value = book.category;
    document.getElementById("isbn").value = book.isbn;
    document.getElementById("publishYear").value = book.year;
    document.getElementById("status").value = book.status;

    document.getElementById("formTitle").textContent = "Edit Book";

    document.getElementById("addBookBtn").classList.add("hidden");
    document.getElementById("updateBookBtn").classList.remove("hidden");
    document.getElementById("cancelEditBtn").classList.remove("hidden");

    document.getElementById("bookFormSection").scrollIntoView({ behavior: "smooth" });
}

function updateBook() {
    if (editIndex === -1) {
        return;
    }

    let titleValue = document.getElementById("bookTitle").value.trim();
    let authorValue = document.getElementById("author").value.trim();
    let categoryValue = document.getElementById("category").value;
    let isbnValue = document.getElementById("isbn").value.trim();
    let yearValue = document.getElementById("publishYear").value.trim();
    let statusValue = document.getElementById("status").value;

    if (titleValue === "" || authorValue === "" || categoryValue === "" || isbnValue === "" || yearValue === "") {
        alert("Please fill all the fields before updating the book.");
        return;
    }

    books[editIndex].title = titleValue;
    books[editIndex].author = authorValue;
    books[editIndex].category = categoryValue;
    books[editIndex].isbn = isbnValue;
    books[editIndex].year = yearValue;
    books[editIndex].status = statusValue;

    saveBooks();
    displayBooks(books);
    updateStatistics();

    resetForm();
}

function searchBook() {
    applyFiltersAndSort();
}


function filterBooks() {
    applyFiltersAndSort();
}

function sortBooks() {
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    let searchValue = document.getElementById("searchBook").value.trim().toLowerCase();
    let categoryValue = document.getElementById("filterCategory").value;
    let statusValue = document.getElementById("filterStatus").value;
    let sortValue = document.getElementById("sortBooks").value;

    let filteredBooks = [];
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let titleMatches = book.title.toLowerCase().indexOf(searchValue) !== -1;
        let categoryMatches = categoryValue === "All" || book.category === categoryValue;
        let statusMatches = statusValue === "All" || book.status === statusValue;

        if (titleMatches && categoryMatches && statusMatches) {
            filteredBooks.push(book);
        }
    }


    if (sortValue === "titleAsc") {
        filteredBooks.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        });
    } else if (sortValue === "titleDesc") {
        filteredBooks.sort(function (a, b) {
            return b.title.localeCompare(a.title);
        });
    } else if (sortValue === "yearAsc") {
        filteredBooks.sort(function (a, b) {
            return a.year - b.year;
        });
    } else if (sortValue === "yearDesc") {
        filteredBooks.sort(function (a, b) {
            return b.year - a.year;
        });
    }

    displayBooks(filteredBooks);
}

function toggleStatus(index) {
    if (books[index].status === "Available") {
        books[index].status = "Borrowed";
    } else {
        books[index].status = "Available";
    }

    saveBooks();
    displayBooks(books);
    updateStatistics();
}

function updateStatistics() {
    let totalCount = books.length;
    let availableCount = 0;
    let borrowedCount = 0;
    let categoryList = []; 

    for (let i = 0; i < books.length; i++) {

        if (books[i].status === "Available") {
            availableCount++;
        } else {
            borrowedCount++;
        }

        if (categoryList.indexOf(books[i].category) === -1) {
            categoryList.push(books[i].category);
        }
    }

    document.getElementById("totalBooks").textContent = totalCount;
    document.getElementById("availableBooks").textContent = availableCount;
    document.getElementById("borrowedBooks").textContent = borrowedCount;
    document.getElementById("categoriesCount").textContent = categoryList.length;
    document.getElementById("headerTotalBooks").textContent = totalCount;
}

function resetForm() {
    document.getElementById("bookForm").reset();

    editIndex = -1;
    document.getElementById("formTitle").textContent = "Add New Book";

    document.getElementById("addBookBtn").classList.remove("hidden");
    document.getElementById("updateBookBtn").classList.add("hidden");
    document.getElementById("cancelEditBtn").classList.add("hidden");
}