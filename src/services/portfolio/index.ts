import { db, auth } from "../../firebase/firebase";

export const postPortfolio = (name: string) =>
  db.collection("portfolio").add({
    name,
    owner: auth.currentUser!.uid,
  });

export const getPortfolioList = () =>
  db.collection("portfolio").where("owner", "==", auth.currentUser!.uid);

export const getPortfolioById = (id: string) =>
  db.collection("portfolio").doc(id);

export const getPortfolioAssetsById = (id: string) =>
  db.collection("portfolio").doc(id).collection("assets");
