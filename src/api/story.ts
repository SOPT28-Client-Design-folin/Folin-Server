import express from "express";
import mongoose from "mongoose";
import Story from "../models/Story";
const router = express.Router();

/**
 *  @route Post api/story
 *  @desc Register story
 *  @access Public
 */

router.get('/story', async (req, res) => {
  try {
    //console.log('hi');
    const main = await Story.findOne();
    const best = await Story.find().limit(4);
    const thema = await Story.find().limit(6);
    const popular = await Story.find().limit(10);
    const result = { main, best, thema, popular };
  return res.status(200).json({ status: 200, message: "메인화면 조회 성공 ^_^", data: result });
  } catch(error) {
    return res.status(500).json({ status: 500, message: "메인화면 조회 실패 ㅠㅅㅠ" });
  }
}); 

module.exports = router;