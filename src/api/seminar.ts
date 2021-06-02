import express from "express";
import mongoose from "mongoose";
import Seminar from "../models/Seminar";
import LineupSeminar from "../models/LineupSeminar";
const router = express.Router();

router.get('/', async (req, res) => {
  try {

    const main = await Seminar.find()
    .select("main_image")
    .where('main').equals(true);

    const folin_seminar = await Seminar.find()
    .select('title sub_image author job state price sale_price')
    .where('follin').equals(true);

    const lineup = await LineupSeminar.find().select('-title -__v');

    const result = { main, folin_seminar, lineup };

    if (!result) {
      res.status(400).json({
          msg: "값을 불러오지 못했습니다.",
      });
  }

  return res.status(200).json({ status: 200, message: "메인화면 조회 성공 ^_^", data: result });
  } catch(error) {
    return res.status(500).json({ status: 500, message: "메인화면 조회 실패 ㅠㅅㅠ" });
  }
}); 

module.exports = router;