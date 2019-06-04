import firebase from "firebase";

export const DB_CONFIG = {
    apiKey: 'AIzaSyBtYtlHgPNiW7r9Dh6Qn9ZREBZlPtIBxbg',
    authDomain: 'ejemplo-react-1.firebaseapp.com',
    databaseURL: 'https://ejemplo-react-1.firebaseio.com',
    projectId: 'ejemplo-react-1',
    storageBucket: 'ejemplo-react-1.appspot.com',
    messagingSenderId: '289537591022',
    appId: '1:289537591022:web:3dec3cf0306bbc26'
  };

  export const app = firebase.initializeApp(DB_CONFIG);
