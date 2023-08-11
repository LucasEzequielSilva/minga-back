import mongoose from "mongoose";


let schema = new mongoose.Schema({
  author_id: {
    type: mongoose.Types.ObjectId,
    ref: "authors",
    required: true,
  },
  company_id: { type: mongoose.Types.ObjectId, ref: "companies" },
  title: { type: String, required: true },
  cover_photo: { type: String, required: true },
  description: { type: String, required: true },
  category_id: { type: mongoose.Types.ObjectId, ref: "categories" },
  user:{ type: mongoose.Types.ObjectId, ref: "reactions" },
  reactions: {
    like: { type: Number, default: 0 },
    dislike: { type: Number, default: 0 },
    heart: { type: Number, default: 0 },
    surprised:{type:Number, default: 0},
  },
},
  { timestamp: true }

);

let collection = "mangas";

let Manga = mongoose.model(collection, schema);
export default Manga;