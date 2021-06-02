"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LineupSeminarSchema = new mongoose_1.default.Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
    },
    alarm: {
        type: Boolean,
    },
    seminar_date: {
        type: String,
    },
    price: {
        type: Number,
    },
    place: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.default.model("LineupSeminar", LineupSeminarSchema);
//# sourceMappingURL=LineupSeminar.js.map