import { Schema, model, Types } from "mongoose";

let schema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: false },
    date: { type: Date },
    user_id: { type: Types.ObjectId, ref: "users", required: true },
    content: { type: String, required: true },
    chapter_id: { type: Types.ObjectId, ref: "chapters", required: true }
}, {
    timestamps: true,
    timeseries: true

})

let collection = 'comments'
let Comments = model(collection, schema)
export default Comments