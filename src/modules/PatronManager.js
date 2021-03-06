const remoteURL = "http://localhost:8088"

const PatronManager = {
  get(id) {
    return fetch(`${remoteURL}/patrons/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/patrons`).then(result => result.json())
  },
   archive(id) {
     return fetch(`${remoteURL}/patrons/${id}`, {
         method: "PATCH",
         headers: {
             "Content-Type": "application/json"
         },
         body:JSON.stringify({active: false})
     })
     .then(result => result.json())
   },
   post(newPatron) {
     return fetch(`${remoteURL}/patrons`, {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(newPatron)
     }).then(data => data.json())
 }
}


export default PatronManager