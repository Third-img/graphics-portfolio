import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

async function saveToFirestore(data) {
  await addDoc(collection(db, "graphic-filters"), {
    title: data.title,
    imageUrl: data.imageUrl,
    category: data.category,
    imageGroup: data.group,
    createdAt: serverTimestamp(),
  });
}

export const formUpload = async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const category = document.getElementById("category").value;
  const group = document.getElementById("imageGroup").value;

  await saveToFirestore({
    title,
    imageUrl,
    category,
    group,
  });

  alert("upload succesful");
  e.target.reset();
};
