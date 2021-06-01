"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SeminarSchema = new mongoose_1.default.Schema({
    main_image: {
        type: String,
    },
    sub_image: {
        type: String,
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    job: {
        type: String,
    },
    state: {
        type: String,
    },
    price: {
        type: Number,
    },
    sale_price: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.default.model("Seminar", SeminarSchema);
//# sourceMappingURL=Seminar.js.map