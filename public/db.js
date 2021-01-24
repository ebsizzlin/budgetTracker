let db;

//new budget database request
const request = indexedDB.open('budget', 1);

request.onupgradeneeded = (event) => {
    //pending, autoincrement true
    const db = event.target.result;
    db.createObjectStore('pending', {autoIncrement: true})
};

request.onsuccess = (event) => {
    db = event.target.result;
    //online?
    if (navigator.onLine) {
        checkDatabase();
    }
}

//onerror

//saverecord

//checkdatabase

    //onsuccess getall

//listener