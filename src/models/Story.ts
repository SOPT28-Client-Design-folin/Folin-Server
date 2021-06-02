import mongoose from "mongoose";
import { IStory } from "../interfaces/IStory";

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  content: {
    type: String,
  },
  category: [
    {
      category1: {
        type: String,
        required: true,
      },
      category2: {
        type: String,
        required: true,
      },
    }
  ],
  thema_title: {
    type: Number,
  },
  main_image: {
    type: String,
  },
  rect_image: {
    type: String,
  },
  sub_image: {
    type: String,
  },
  heart: {
    type: Boolean,
  },
  bookmark: {
    type: Boolean,
  },
  free: {
    type: Boolean,
  },
  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IStory & mongoose.Document>(
  "Story", 
  StorySchema
);

