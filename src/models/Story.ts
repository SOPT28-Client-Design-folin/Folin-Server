import mongoose from "mongoose";
import { IStory } from "../interfaces/IStory";
import { IKeyword } from "../interfaces/IKeyword";

const StorySchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  keyword: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  category: {
    type: String,
    required: true,
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