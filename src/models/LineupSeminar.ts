import mongoose from "mongoose";
import { ILineupSeminar } from "../interfaces/ILineupSeminar";

const LineupSeminarSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,

  },
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
  people: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ILineupSeminar & mongoose.Document>(
  "LineupSeminar", 
  LineupSeminarSchema
);