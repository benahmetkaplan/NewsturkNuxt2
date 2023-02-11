importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBU-DJ7AXrlISgvVHi3yjaj-utNDI7sROg",
    authDomain: "nt-flutter-notification.firebaseapp.com",
    projectId: "nt-flutter-notification",
    storageBucket: "nt-flutter-notification.appspot.com",
    messagingSenderId: "222470304912",
    appId: "1:222470304912:web:2802fb8a5ef5b34e8a9415",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', event => {
    console.log(event)
});