//importScripts("https://www.gstatic.com/firebase/7.19.0/firebase-app.js");
//importScripts("https://www.gstatic.com/firebase/7.19.0/firebase-messaging.js");

importScripts("/__/firebase/7.18.0/firebase-app.js");
importScripts("/__/firebase/7.18.0/firebase-messaging.js");
//importScripts('/__/firebase/init.js');

firebase.initializeApp({
  apiKey: "AIzaSyC_bqAzJr3e-DFxxTrQDdIpFhjDaV_S15Y",
  authDomain: "fir-msg-b6f67.firebaseapp.com",
  databaseURL: "https://fir-msg-b6f67.firebaseio.com",
  projectId: "fir-msg-b6f67",
  storageBucket: "fir-msg-b6f67.appspot.com",
  messagingSenderId: "905526710965",
  appId: "1:905526710965:web:b83d08e883ee824a8864fc",
});

firebase.messaging();
