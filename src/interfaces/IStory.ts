import { ICategory } from "./ICategory";

interface IStory {
  title: string;
  keyword: string; //배열에서 string으로 변경합니다!
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