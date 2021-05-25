import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema({
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);