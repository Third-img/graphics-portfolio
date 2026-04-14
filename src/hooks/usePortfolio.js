import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export function useImages() {
  const [imageItems, setItems] = useState([]);
  const [imageLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      const q = query(
        collection(db, "graphic-portfolio"),
        orderBy("createdAt", "desc"),
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
      setLoading(false);
    }
    fetchItems();
  }, []);
  return { imageItems, imageLoading };
}
