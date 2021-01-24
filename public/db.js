let db;

//new budget database request
const request = indexedDB.open('budget', 1);

request.onupgradeneeded = (event) => {
    //pending, autoincrement true
    const db = event.target.result;
    db.createObjectStore('pending', {autoIncrement: true})
};