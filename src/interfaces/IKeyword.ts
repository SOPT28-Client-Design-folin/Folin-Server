import mongoose from "mongoose";

export interface IKeyword {
  user: mongoose.Types.ObjectId;
  image: string;
  title: string;
  alarm: boolean;
  seminar_date: string;
  price: number;
  place: string;
  date?: Date;
}