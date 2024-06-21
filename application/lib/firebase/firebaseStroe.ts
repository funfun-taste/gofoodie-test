import firebaseClient from './firebaseClient';
import {getFirestore} from "firebase/firestore";

const firestore = getFirestore(firebaseClient);
export default firestore;