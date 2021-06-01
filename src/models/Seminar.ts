import mongoose from "mongoose";
//엑스포트가 여러개인 것만 묶을 수 있대, 그래서 몽구스는 안돼
import { ISeminar } from "../interfaces/ISeminar";

const SeminarSchema = new mongoose.Schema({
  main_image: {
    type: String,
  },
  sub_image: {
    type: String,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  job: {
    type: String,
  },
  state: {
    type: String,
  },
  price: {
    type: Number,
  },
  sale_price: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ISeminar & mongoose.Document>(
  "Seminar", 
  SeminarSchema
);