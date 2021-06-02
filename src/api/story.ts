import express from "express";
import mongoose from "mongoose";
import Story from "../models/Story";
import ThemaTitle from "../models/ThemaTitle";
const router = express.Router();

/**
 *  @route Post api/story
 *  @desc Register story
 *  @access Public
 */

router.get('/story', async (req, res) => {
  try {
    const main = await Story.findOne({key:1});
    const best = await Story.find({key:2}).limit(4);
    //const best2 = await Story.find(}, {_id:0, :0})
    const themaTitle = await ThemaTitle.find();
    const thema = await Story.find({key:3}).limit(6);
    const popular = await Story.find({key:4}).limit(10);
    const result = { main, best, themaTitle, thema, popular };
  return res.status(200).json({ status: 200, message: "메인화면 조회 성공 ^_^", data: result });
  } catch(error) {
    return res.status(500).json({ status: 500, message: "메인화면 조회 실패 ㅠㅅㅠ" });
  }
}); 

module.exports = router;