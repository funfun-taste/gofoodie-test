// /api/users
import {addDoc, query, collection,  where, getDocs} from "@firebase/firestore";
import {COLLECTIONS} from "@/apis/config/collections";
import firestore from "@/lib/firebase/firebaseStroe";
import {NextRequest} from "next/server";


export async function GET (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const clientId = searchParams.get('clientId');
  const userCollection = collection(firestore, COLLECTIONS.USER);
  const queryBuilder = query(userCollection, where('clientId', '==', clientId));
  const querySnapshot = await getDocs(queryBuilder);

  const userData = querySnapshot.docs.map(doc => doc.data());
  return new Response(JSON.stringify(userData));
}

export async function POST (req: NextRequest) {
  const body = await req.json();

  const userCollection = collection(firestore, COLLECTIONS.USER);
  await addDoc(userCollection, {...body});

  return new Response;
}