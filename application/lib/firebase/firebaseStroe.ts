import firebaseClient from './firebaseClient';
import {getFirestore} from "firebase/firestore";

const firebaseStore = getFirestore(firebaseClient);
export default firebaseStore;