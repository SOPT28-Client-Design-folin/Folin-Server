"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Seminar_1 = __importDefault(require("../models/Seminar"));
const LineupSeminar_1 = __importDefault(require("../models/LineupSeminar"));
const router = express_1.default.Router();
router.get('/seminar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const main = yield Seminar_1.default.findOne();
        const folin_semiar = yield Seminar_1.default.find().limit(8);
        const lineup = yield LineupSeminar_1.default.findOne();
        const result = { main, folin_semiar, lineup };
        return res.status(200).json({ status: 200, message: "메인화면 조회 성공 ^_^", data: result });
    }
    catch (error) {
        return res.status(500).json({ status: 500, message: "메인화면 조회 실패 ㅠㅅㅠ" });
    }
}));
module.exports = router;
//# sourceMappingURL=seminar.js.map