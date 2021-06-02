export interface IStory {
  title: string;
  author: string;
  content: string;
  category: [string];
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
  author: string;
  content: string;
  category: [string]; 
  thema_title? :number;
  main_image?: string;
  rect_image?: string;
  sub_image?: string;
  heart?: boolean;
  bookmark?: boolean;
  free?: boolean;
  date?: string;
};

