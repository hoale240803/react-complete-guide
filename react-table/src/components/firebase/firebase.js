// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLOavw_Wu6UxJX-ffDMiIgGDtTEmYeITA",
  authDomain: "react-complete-guide-a925f.firebaseapp.com",
  databaseURL:
    "https://react-complete-guide-a925f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-complete-guide-a925f",
  storageBucket: "react-complete-guide-a925f.appspot.com",
  messagingSenderId: "840402763859",
  appId: "1:840402763859:web:da58e9d2949f80073306a6",
  measurementId: "G-N8HNN8CVLQ",
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();
