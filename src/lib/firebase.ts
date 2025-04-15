import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:'SyAU01MAIzayeM64uM90lt0ZXj6wVlbxMPQhdXk',
  authDomain:'todolist-aulia.firebaseapp.com',
  projectId:'todolist-aulia',
  storageBucket:'todolist-aulia.firebasestorage.app',
  messagingSenderId:'89523978436',
  appId:'x1:89523978436:web:617e30539a9dd3f449c99',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
