import mongoose from "mongoose";

export interface IStory {
  title: string;
  keyword: string; 
  author: string;
  content: string;
  category: string;  //Number인가요 ? 
  main_image?: string;
  rect_image?: string;
  sub_image?: string;
  heart?: boolean;
  bookmark?: boolean;
  free?: boolean;
  date?: Date;
}