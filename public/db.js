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
};

request.onerror = (event) => {
    console.log('Oops! ' + event.target.errorCode);
};

let saveRecord = record => {
    //transaction pending, readwrite
    const transaction = db.transaction(['pending'], 'readwrite');
    //access pending object
    const store = transaction.objectStore('pending');
    //add record
    store.add(record);
}

let checkDatabase = () => {
    //transaction pending, readwrite
    const transaction = db.transaction(['pending'], 'readwrite');
    //access pending object
    const store = transaction.objectStore('pending');
    //add record
    const getAll = store.getAll();

    //onsuccess getall
    
}

//listener