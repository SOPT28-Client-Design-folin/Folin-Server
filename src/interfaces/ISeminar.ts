import mongoose from "mongoose";

export interface ISeminar {
  main_image: string;
  sub_image: string;
  title: string;
  author: string;
  job: string;
  state: boolean;
  price: number;
  sale_price: number;
  date?: Date;
  follin: boolean;
  main: boolean;
}