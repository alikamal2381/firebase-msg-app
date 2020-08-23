import React from "react";
import "./App.css";
import firebase from "./firebase";

function App() {
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .then((token) => {
      console.log("token", token);
    });

  return (
    <div className="App">
      <h1>Firebase Messaging App</h1>
      <p>Push Notification</p>
    </div>
  );
}

export default App;
