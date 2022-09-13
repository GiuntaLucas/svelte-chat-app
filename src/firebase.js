import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBox8emxZsHECfbS-5ksDNeIMZ6Eb-2Db0",
  authDomain: "svelte-chatapp-5d443.firebaseapp.com",
  projectId: "svelte-chatapp-5d443",
  storageBucket: "svelte-chatapp-5d443.appspot.com",
  messagingSenderId: "572329610929",
  appId: "1:572329610929:web:ef6b7a29086454512a9c90",
  measurementId: "G-QGZNYDCN8N"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);