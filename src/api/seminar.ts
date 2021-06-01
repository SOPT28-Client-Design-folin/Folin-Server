import express from "express";
import mongoose from "mongoose";
import Seminar from "../models/Seminar";
import LineupSeminar from "../models/LineupSeminar";
const router = express.Router();

router.get('/seminar', async (req, res) => {
  try {
    /*
    const main = await Seminar.findOne();
    const folin_semiar = await Seminar.find().limit(8);
    const lineup = await LineupSeminar.findOne();
    const result = { main, folin_semiar, lineup };*/
    const result = '3';

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