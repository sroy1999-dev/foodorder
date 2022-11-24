import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAL_8DinSyhMQsHIlWcVn2w2F7PP0yg07Y",
    authDomain: "foodapp-d8fc3.firebaseapp.com",
    databaseURL: "https://foodapp-d8fc3-default-rtdb.firebaseio.com",
    projectId: "foodapp-d8fc3",
    storageBucket: "foodapp-d8fc3.appspot.com",
    messagingSenderId: "149618023959",
    appId: "1:149618023959:web:3308e87b9b9fd0a55ec652"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };