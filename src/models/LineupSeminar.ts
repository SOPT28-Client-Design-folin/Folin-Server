import mongoose from "mongoose";
import { ILineupSeminar } from "../interfaces/ILineupSeminar";

const LineupSeminarSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  alarm: {
    type: Boolean,
  },
  seminar_date: {
    type: String,
  },
  price: {
    type: Number,
  },
  place: {
    type: String,
  },
  date: {
    type: String,
  },
});

export default mongoose.model<ILineupSeminar & mongoose.Document>(
  "LineupSeminar", 
  LineupSeminarSchema
);