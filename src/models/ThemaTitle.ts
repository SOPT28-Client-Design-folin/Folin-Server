import mongoose from "mongoose";
import { IThemaTitle } from "../interfaces/IThemaTitle";

const ThemaTitleSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

export default mongoose.model<IThemaTitle & mongoose.Document>(
  "ThemaTitle", 
  ThemaTitleSchema
);