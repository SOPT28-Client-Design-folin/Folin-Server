export interface IStory {
  title: string;
  keyword: string; //배열에서 string으로 변경합니다!
  author: string;
  content: string;
  category: [
    {
      category1: string;
      category2: string;
    }
  ] 
  main_image?: string;
  rect_image?: string;
  sub_image?: string;
  heart?: boolean;
  bookmark?: boolean;
  free?: boolean;
  date?: Date;
}

export interface IStoryDTO {
  title: string;
  keyword: string;
  author: string;
  content: string;
  category: [
    {
      category1: string;
      category2: string;
    }
  ]  
  main_image?: string;
  rect_image?: string;
  sub_image?: string;
  heart?: boolean;
  bookmark?: boolean;
  free?: boolean;
  date?: Date;
};

