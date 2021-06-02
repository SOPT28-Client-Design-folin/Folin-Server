export interface IStory {
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
  thema_title? :number;
  main_image?: string;
  rect_image?: string;
  sub_image?: string;
  heart?: boolean;
  bookmark?: boolean;
  free?: boolean;
  date?: string;
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
  thema_title? :number;
  main_image?: string;
  rect_image?: string;
  sub_image?: string;
  heart?: boolean;
  bookmark?: boolean;
  free?: boolean;
  date?: string;
};

