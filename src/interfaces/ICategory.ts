import mongoose from "mongoose";

export interface ICategory {
  user: mongoose.Types.ObjectId;
  buiseness?: boolean;
  space?: boolean;
  lifestyle?: boolean;
  tech?: boolean;
  startup?: boolean;
  work?: boolean;
  carrer?: boolean;
  O_culture?: boolean;
}