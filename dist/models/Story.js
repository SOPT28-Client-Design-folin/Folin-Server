"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const StorySchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("Story", StorySchema);
//# sourceMappingURL=Story.js.map