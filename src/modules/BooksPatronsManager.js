const remoteURL = "http://localhost:8088"

const BooksPatronsManager = {
    getPatronsThatCheckedOutBooks(booksId) {
        return fetch(`${remoteURL}/books-patrons/?booksId=${booksId}&_expand=patrons`).then(result => result.json())
    },
    getCheckedoutBooks(patronsId) {
        return fetch(`${remoteURL}/books-patrons/?patronsId=${patronsId}&_expand=books`).then(result => result.json())
    }
}

//http://localhost:8088/books-patrons?booksId=4&_expand=books
export default BooksPatronsManager