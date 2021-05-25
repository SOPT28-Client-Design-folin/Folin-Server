import mongoose from "mongoose";

export interface ISeminar {
  user: mongoose.Types.ObjectId;
  main_image: string;
  sub_image: string;
  title: string;
  author: string;
  job: string;
  state: boolean;
  price: number;
  sale_price: number;
  date?: Date;
}