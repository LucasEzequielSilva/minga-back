
import mongoose from "mongoose";

const { Schema, Types, model } = mongoose;

const schema = new Schema({
    user_id: { type: Types.ObjectId, ref: 'users', required: true, },
    manga_id: { type: Types.ObjectId, ref: 'chapters', required: true, },
    name: { type: String, required: true, },
}, {
    timestamps: true
});

const collection = 'reactions';
const Reactions = model(collection, schema);

export default Reactions;