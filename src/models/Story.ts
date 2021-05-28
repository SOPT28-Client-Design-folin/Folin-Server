import mongoose from "mongoose";
import { IStory } from "../interfaces/IStory";

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  keyword: {
    type: String,
  },
  author: {
    type: String,
  },
  content: {
    type: String,
  },
  category: {
    type: String,
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
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IntersectionObserverEntry & mongoose.Document>(
  "Story", 
  StorySchema
);