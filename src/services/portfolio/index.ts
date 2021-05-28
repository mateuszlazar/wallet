import { db, auth } from "../../firebase/firebase";

export const postPortfolio = (name: string) =>
  db.collection("portfolio").add({
    name,
    owner: auth.currentUser!.uid,
  });

export const updatePortfolioAssets = (id: any, assets: any) =>
  db
    .collection("portfolio")
    .doc(id)
    .set(
      {
        assets: {
          stock: [{ currency: "EUR", value: 10, name: "IWDA" }],
          estate: [{ name: "Jana Szczepanika 1/85", price: 350000 }],
          bond: [
            {
              name: "EDO",
              interest: { firstYear: 0.017, nextYears: "0.01" },
              value: 50000,
            },
          ],
        },
      },
      { merge: true }
    );

export const getPortfolioList = () =>
  db.collection("portfolio").where("owner", "==", auth.currentUser!.uid);

export const getPortfolioById = (id: string) =>
  db.collection("portfolio").doc(id);

export const getPortfolioAssetsById = (id: string) =>
  db.collection("portfolio").doc(id).collection("assets");
