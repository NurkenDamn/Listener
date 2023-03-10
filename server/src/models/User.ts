import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: String },
    id: { type: String },
});

export default mongoose.model("User", userSchema);