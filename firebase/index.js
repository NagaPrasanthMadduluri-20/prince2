
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYpsHZSyk4O8CSSwCRFel2CoCtsKbs2MI",
  authDomain: "rowytest-fae2c.firebaseapp.com",
  projectId: "rowytest-fae2c",
  storageBucket: "rowytest-fae2c.appspot.com",
  messagingSenderId: "118100198179",
  appId: "1:118100198179:web:e363c6521ebf8631e98296",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);