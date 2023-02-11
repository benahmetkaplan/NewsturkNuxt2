import firebase from "firebase/app";
import '@firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBU-DJ7AXrlISgvVHi3yjaj-utNDI7sROg",
    authDomain: "nt-flutter-notification.firebaseapp.com",
    projectId: "nt-flutter-notification",
    storageBucket: "nt-flutter-notification.appspot.com",
    messagingSenderId: "222470304912",
    appId: "1:222470304912:web:2802fb8a5ef5b34e8a9415"
}

let messaging;

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

if (typeof window !== 'undefined') {
    messaging = firebase.messaging();
}

export { messaging };