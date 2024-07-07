import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyCODyZlc7HAY36ruoKcA8_-ZWs43fM1_fk",
  authDomain: "comida-buffet.firebaseapp.com",
  projectId: "comida-buffet",
  storageBucket: "comida-buffet.appspot.com",
  messagingSenderId: "152888220956",
  appId: "1:152888220956:web:ba8a58d73b75e9f116aed9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
