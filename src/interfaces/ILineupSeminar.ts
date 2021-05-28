import mongoose from "mongoose";

export interface ILineupSeminar {
  image: string;
  title: string;
  alarm: boolean;
  seminar_date: string;
  price: number;
  place: string;
  people: number;
  date: string;
}