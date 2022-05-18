// create variable to hold db connection
let db;

// establish a connection to IndexedDB called 'big-spender' and set it to version 1
const request = indexedDB.open("big-spender", 1);

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function (event) {
  // save a reference to the database
  const db = event.target.result;
  //create a object store (table) called 'new-transaction', set it to have an auto incrementing primary key of sorts
  db.createObjectStore("new-transaction", { autoIncrement: true });
};
