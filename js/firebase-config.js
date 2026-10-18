// =========================================================
// Configuração do Firebase
// =========================================================
// 1. Crie um projeto em https://console.firebase.google.com
// 2. Ative o Firestore Database (modo produção ou teste)
// 3. Em "Configurações do projeto > Geral", copie o objeto
//    de configuração do seu app web e cole abaixo.
// 4. Nunca coloque uma chave de projeto de PRODUÇÃO real
//    com dados sensíveis em um repositório público — para
//    este projeto, os dados são de avaliação e não incluem
//    identificação pessoal, mas defina regras de segurança
//    adequadas no Firestore (veja o README).
// =========================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDw3O1u4KF-fL__0UGZnO3kQxcU8EV-rRM",
  authDomain: "ponte-digital-7d810.firebaseapp.com",
  projectId: "ponte-digital-7d810",
  storageBucket: "ponte-digital-7d810.firebasestorage.app",
  messagingSenderId: "302152053969",
  appId: "1:302152053969:web:c843de3380c457e36e01f0",
  measurementId: "G-WE7V2Y3DWD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//npm install firebase