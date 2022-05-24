import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
  categories: "++local_id,name,createdAt,updatedAt,__v,_id",
  ingredients: "++local_id,name,purchase_type,createdAt,updatedAt,__v,_id",
  meals:
    "++local_id,name,category_id,price,img,ingredients,createdAt,updatedAt,__v,_id",
  clients: "++local_id,name,telefon,createdAt,updatedAt__v,izoh,_id",
});
