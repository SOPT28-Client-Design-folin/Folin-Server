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
const Story_1 = __importDefault(require("../models/Story"));
const router = express_1.default.Router();
/**
 *  @route Post api/story
 *  @desc Register story
 *  @access Public
 */
router.get('/story', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log('hi');
        const main = yield Story_1.default.findOne();
        const best = yield Story_1.default.find().limit(4);
        const thema = yield Story_1.default.find().limit(6);
        const popular = yield Story_1.default.find().limit(10);
        const result = { main, best, thema, popular };
        return res.status(200).json({ status: 200, message: "메인화면 조회 성공 ^_^", data: result });
    }
    catch (error) {
        return res.status(500).json({ status: 500, message: "메인화면 조회 실패 ㅠㅅㅠ" });
    }
}));
module.exports = router;
//# sourceMappingURL=story.js.map