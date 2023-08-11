import mongoose, { Types } from "mongoose";


let schema = new mongoose.Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, required: true },
    is_online: { type: Boolean, required: true },
    is_verified: { type: Boolean, required: true },
    verify_code: { type: String, required: true }
}, {
    timestamps: true
})
let collection = 'users'
let User = mongoose.model(collection, schema)
export default User