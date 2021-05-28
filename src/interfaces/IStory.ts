import mongoose from "mongoose";
import { IKeyword } from "./IKeyword";
import { ICategory } from "./ICategory";

interface IStory {
  title: string;
  keyword: [IKeyword];
  author: string;
  content: string;
  category: [ICategory];
  main_image?: string;
  rect_image?: string;
  sub_image?: string;
  heart?: boolean;
  bookmark?: boolean;
  free?: boolean;
  date?: Date;
};

export { IStory };