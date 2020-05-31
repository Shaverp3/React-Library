const remoteURL = "http://localhost:8088"

const BookManager = {
  get(id) {
    return fetch(`${remoteURL}/books/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/books`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/books/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}


export default BookManager